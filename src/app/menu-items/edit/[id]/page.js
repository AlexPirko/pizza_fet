'use client';

import Link from 'next/link';
import { redirect, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa6';

import { useProfile } from '@/libs/hooks/useProfile';
import UserTabs from '@/components/UserTabs';
import MenuItemForm from '@/components/menu/MenuItemForm';
import DeleteButton from '@/components/DeleteButton';

export default function EditMenuItemPage() {
    const { id } = useParams();

    const [menuItem, setMenuItem] = useState(null);
    const [redirectToItems, setRedirectToItems] = useState(false);
    const { loading, data } = useProfile();

    useEffect(() => {
        fetch('/api/menu-items').then((res) => {
            res.json().then((items) => {
                const item = items.find((i) => i._id === id);
                setMenuItem(item);
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function handleFormSubmit(e, data) {
        e.preventDefault();
        data = { ...data, _id: id };
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/menu-items', {
                method: 'PUT',
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

    async function handleDeleteClick() {
        const promise = new Promise(async (resolve, reject) => {
            const res = await fetch('/api/menu-items?_id=' + id, {
                method: 'DELETE',
            });
            if (res.ok) resolve();
            else reject();
        });

        await toast.promise(promise, {
            loading: 'Deleting...',
            success: 'Deleted',
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
            <div className='max-w-xl mx-auto mt-8'>
                <Link
                    href={'/menu-items'}
                    className='btn__outline flex justify-center items-center'>
                    <FaArrowLeft
                        className='mr-2 text-dark/90'
                        size={20}
                    />
                    <span>Show all menu items</span>
                </Link>
                <MenuItemForm
                    menuItem={menuItem}
                    onSubmit={handleFormSubmit}
                />
                <div className='max-w-md ml-auto pl-14 mt-2'>
                    <div className='text-center ml-auto border p-2 rounded-xl'>
                        <DeleteButton
                            label='Delete this menu item'
                            onDelete={handleDeleteClick}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
