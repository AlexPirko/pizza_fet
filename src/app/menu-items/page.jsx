'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

import UserTabs from '@/components/UserTabs';
import { useProfile } from '@/libs/hooks/useProfile';

export default function MenuItemsPage() {
    const [menuItems, setMenuItems] = useState([]);
    const { loading, data } = useProfile();

    useEffect(() => {
        fetch('/api/menu-items').then((res) => {
            res.json().then((menuItems) => {
                setMenuItems(menuItems);
            });
        });
    }, []);

    if (loading) {
        return <div className='flex-auto'>Loading user info...</div>;
    }

    if (!data?.admin) {
        return 'Not an admin.';
    }

    return (
        <section className='py-8 flex-auto'>
            <UserTabs isAdmin={true} />
            <h2 className='mb-6 text-center text-dark text-3xl font-semibold xl:text-5xl'>
                Menu
            </h2>
            <div className='max-w-lg mx-auto pt-6 border-t'>
                <div>
                    <Link
                        className='btn__outline flex justify-center items-center'
                        href={'/menu-items/new'}>
                        Crete new menu item
                        <FaArrowRight
                            className='ml-2 text-dark/90'
                            size={20}
                        />
                    </Link>
                </div>
                <div>
                    <h2 className='text-lg text-dark/80 mt-8 mb-2'>
                        Edit menu item:
                    </h2>
                    <div className='grid grid-cols-3 gap-2'>
                        {menuItems?.length > 0 &&
                            menuItems.map((item) => (
                                <Link
                                    key={item?._id}
                                    href={'/menu-items/edit/' + item?._id}
                                    className='bg-gray-200 rounded-lg p-4'>
                                    <div className='relative'>
                                        <Image
                                            className='rounded-md'
                                            src={item?.image}
                                            alt={''}
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div className='text-center'>
                                        {item?.name}
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
