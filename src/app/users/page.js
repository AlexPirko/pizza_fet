'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaPenToSquare } from 'react-icons/fa6';

import { useProfile } from '@/libs/hooks/useProfile';
import UserTabs from '@/components/UserTabs';

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const { loading, data } = useProfile();

    useEffect(() => {
        fetch('/api/users').then((response) => {
            response.json().then((users) => {
                setUsers(users);
            });
        });
    }, []);

    if (loading) {
        return 'Loading user info...';
    }

    if (!data.admin) {
        return 'Not an admin';
    }

    return (
        <section className='py-8 flex-auto'>
            <UserTabs isAdmin={true} />
            <h2 className='mb-6 text-center text-dark text-3xl font-semibold xl:text-5xl'>
                Users
            </h2>            
            <div className='max-w-lg mx-auto border-t pt-6'>
                {users?.length > 0 &&
                    users.map((user) => (
                        <div
                            key={user._id}
                            className='bg-gray-100 rounded-lg mb-3 p-2 px-4 flex items-center gap-4'>
                            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 grow'>
                                <div className='text-gray-900'>
                                    {!!user.name && <span>{user.name}</span>}
                                    {!user.name && (
                                        <span className='italic'>No name</span>
                                    )}
                                </div>
                                <span className='text-gray-500'>
                                    {user.email}
                                </span>
                            </div>
                            <div>
                                <Link
                                    href={'/users/' + user._id}>
                                    <FaPenToSquare className='text-dark/90' size={20}/>
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
}
