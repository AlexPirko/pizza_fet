'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import UserTabs from '@/components/UserTabs';
import UserForm from '@/components/layout/UserForm';
import { useProfile } from '@/libs/hooks/useProfile';

export default function EditUserPage() {
    const { loading, data } = useProfile();
    const [user, setUser] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch('/api/profile?_id=' + id).then((res) => {
            res.json().then((user) => {
                setUser(user);
            });
        });
    }, [id]);

    async function handleSaveButtonClick(e, data) {
        e.preventDefault();
        const promise = new Promise(async (resolve, reject) => {
            const res = await fetch('/api/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, _id: id }),
            });
            if (res.ok) resolve();
            else reject();
        });

        await toast.promise(promise, {
            loading: 'Saving user...',
            success: 'User saved',
            error: 'An error has occurred while saving the user',
        });
    }

    if (loading) {
        return <div className='flex-auto'>Loading user info...</div>;
    }

    if (!data.admin) {
        return <div className='flex-auto'>Not an admin</div>;
    }

    return (
        <section className='py-8 flex-auto'>
            <h2 className='mb-4 text-center text-dark text-3xl font-semibold xl:text-5xl'>
                Users
            </h2>
            <UserTabs isAdmin={true} />
            <div className='max-w-lg mx-auto'>
                <UserForm
                    user={user}
                    onSave={handleSaveButtonClick}
                />
            </div>
        </section>
    );
}
