'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';
import UserTabs from '@/components/UserTabs';
import EditableImage from '@/components/layout/EditableImage';

const ProfilePage = () => {
    const session = useSession();

    const [userName, setUserName] = useState('');
    const [image, setImage] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [profileFetched, setProfileFetched] = useState(false);
    const { status } = session;

    useEffect(() => {
        if (status === 'authenticated') {
            fetch('/api/profile').then((response) => {
                response.json().then((data) => {
                    setUserName(data.name);
                    setImage(data.image);
                    setPhone(data.phone);
                    setAddress(data.address);
                    setIsAdmin(data.admin);
                    setProfileFetched(true);
                });
            });
        }
    }, [status]);

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: userName, image, phone, address }),
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
            <h2 className='mb-4 text-center text-dark text-3xl font-semibold xl:text-5xl'>
                Profile
            </h2>
            <UserTabs isAdmin={isAdmin} />
            <div className='max-w-lg mx-auto border-t pt-4'>
                <div className='flex gap-4 justify-center'>
                    <div>
                        <div className='flex flex-col p-2 rounded-lg relative'>
                            <EditableImage
                                link={image}
                                setLink={setImage}
                            />
                        </div>
                    </div>
                    <form
                        className='grow'
                        onSubmit={handleProfileUpdate}>
                        <label>First and last name</label>
                        <input
                            type='text'
                            placeholder='First and last name'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <label>E-mail</label>
                        <input
                            type='email'
                            disabled
                            value={session.data.user.email}
                        />
                        <label>Phone</label>
                        <input
                            type='tel'
                            placeholder='Phone number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <label>Street address</label>
                        <input
                            type='text'
                            placeholder='Street address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <button
                            className='my-4'
                            type='submit'>
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;
