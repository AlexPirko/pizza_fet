'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';
import UserTabs from '@/components/UserTabs';
import EditableImage from '@/components/layout/EditableImage';
import UserForm from '@/components/layout/UserForm';

const ProfilePage = () => {
    const session = useSession();

    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [profileFetched, setProfileFetched] = useState(false);
    const { status } = session;

    useEffect(() => {
        if (status === 'authenticated') {
            fetch('/api/profile').then((response) => {
                response.json().then((data) => {
                    setUser(data);
                    setIsAdmin(data.admin);
                    setProfileFetched(true);
                });
            });
        }
    }, [session, status]);

    const handleProfileUpdate = async (e, data) => {
        e.preventDefault();
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) resolve();
            else reject();
        });

        await toast.promise(savingPromise, {
            loading: 'Saving...',
            success: 'Profile saved!',
            error: 'Error',
        });
    };

    if (status === 'loading' || !profileFetched) {
        return (
            <div className='p-8 flex-auto text-dark text-2xl font-semibold'>
                Loading...
            </div>
        );
    }

    if (status === 'unauthenticated') {
        return redirect('/login');
    }

    return (
        <section className='py-8 flex-auto'>
            <UserTabs isAdmin={isAdmin} />
            <h2 className='mb-6 text-center text-dark text-3xl font-semibold xl:text-5xl'>
                Profile
            </h2>
            <div className='max-w-lg mx-auto border-t pt-6'>
                <UserForm
                    user={user}
                    onSave={handleProfileUpdate}
                />
            </div>
        </section>
    );
};

export default ProfilePage;
