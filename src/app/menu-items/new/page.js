'use client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa6';

import UserTabs from '@/components/UserTabs';
import MenuItemForm from '@/components/menu/MenuItemForm';
import { useProfile } from '@/libs/hooks/useProfile';

export default function NewMenuItemPage() {
    const [redirectToItems, setRedirectToItems] = useState(false);
    const { loading, data } = useProfile();

    async function handleFormSubmit(e, data) {
        e.preventDefault();
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/menu-items', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) resolve();
            else reject();
        });

        await toast.promise(savingPromise, {
            loading: 'Saving this tasty item',
            success: 'Saved',
            error: 'Error',
        });

        setRedirectToItems(true);
    }

    if (redirectToItems) {
        return redirect('/menu-items');
    }

    if (loading) {
        return <div className='flex-auto'>Loading user info...</div>;
    }

    if (!data.admin) {
        return 'Not an admin.';
    }

    return (
        <section className='py-8 flex-auto'>
            <UserTabs isAdmin={true} />
            <div className='max-w-2xl mx-auto mt-8'>
                <Link
                    className='btn__outline flex justify-center items-center'
                    href={'/menu-items'}>
                    <FaArrowLeft
                        className='mr-2 text-dark/90'
                        size={20}
                    />
                    Show all menu items
                </Link>
            </div>
            <MenuItemForm
                menuItem={null}
                onSubmit={handleFormSubmit}
            />
        </section>
    );
}
