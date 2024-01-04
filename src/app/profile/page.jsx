'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

const ProfilePage = () => {
    const session = useSession();

    const [userName, setUserName] = useState('');
    const [image, setImage] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const { status } = session;

    useEffect(() => {
        if (status === 'authenticated') {
            setUserName(session.data.user.name);
            setImage(session.data.user.image);
            fetch('/api/profile').then((response) => {
                response.json().then((data) => {
                    // setPhone(data.phone);
                    // setAddress(data.address);
                    // setIsAdmin(data.admin);
                });
            });
        }
    }, [session, status]);

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

    const handleFileChange = async (e) => {
        const files = e.target.files;
        if (files?.length === 1) {
            const data = new FormData();
            data.set('file', files[0]);

            await toast.promise(
                fetch('/api/upload', {
                    method: 'POST',
                    body: data,
                }).then((response) => {
                    if (response.ok) {
                        return response.json().then((link) => {
                            setImage(link);
                        });
                    }
                    throw new Error('Something went wrong...');
                }),
                {
                    loading: 'Uploading...',
                    success: 'Upload complete!',
                    error: 'Upload error',
                },
            );
        }
    };

    if (status === 'loading') {
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
        <section className='mt-8 flex-auto'>
            <h1 className='mb-4 text-center text-dark text-4xl font-semibold xl:text-5xl'>
                Profile
            </h1>
            <div className='flex justify-center gap-4 tabs'>
                {isAdmin && (
                    <>
                        <Link href={'/profile'}>Profile</Link>
                        <Link href={'/categories'}>Categories</Link>
                        <Link href={'/menu-items'}>Menu Items</Link>
                        <Link href={'/users'}>Users</Link>
                    </>
                )}
            </div>
            <div className=' max-w-lg mx-auto'>
                <div className='flex gap-4 justify-center'>
                    <div>
                        <div className='flex flex-col p-2 rounded-lg relative'>
                            {image && (
                                <Image
                                    className='rounded-lg w-full h-full mb-2'
                                    src={image}
                                    width={100}
                                    height={100}
                                    alt='avatar'
                                />
                            )}

                            <label className='!ml-0'>
                                <input
                                    className='hidden'
                                    type='file'
                                    onChange={handleFileChange}
                                />
                                <span className='block border border-gray-300 rounded-lg p-1.5 text-center font-semibold text-base cursor-pointer'>
                                    Edit
                                </span>
                            </label>
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
