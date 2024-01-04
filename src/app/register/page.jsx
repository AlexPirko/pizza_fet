'use client';

import { useState } from 'react';
import { IoLogoGoogle } from 'react-icons/io';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCreatingUser(true);
        setUserCreated(false);
        setError(false);

        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            setUserCreated(true);
        } else {
            setError(true);
        }
        setCreatingUser(false);
    };

    return (
        <section className='mt-8 flex-auto'>
            <h1 className='mb-6 text-center text-dark text-4xl font-semibold xl:text-5xl'>
                Register
            </h1>
            {userCreated && (
                <div className='my-4 text-center text-primary'>
                    User created. Now you can{' '}
                    <Link
                        className='underline'
                        href={'/login'}>
                        Login &raquo;
                    </Link>
                </div>
            )}
            {error && (
                <div className='my-4 text-center text-primary'>
                    An error has occured. Something went wrong...
                </div>
            )}
            <form
                className='flex flex-col gap-1 max-w-xs mx-auto'
                onSubmit={handleSubmit}>
                <input
                    type='email'
                    placeholder='email'
                    value={email}
                    disabled={creatingUser}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='password'
                    value={password}
                    disabled={creatingUser}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className='submit'
                    type='submit'
                    disabled={creatingUser}>
                    Register
                </button>
                <div className='my-2 text-center text-dark/90'>
                    or login with provider
                </div>
                <button
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                    className='btn__outline w-full flex items-center justify-center gap-2'>
                    <IoLogoGoogle size={24} />
                    Login with Google
                </button>
                <div className='my-4 text-center text-dark border-t pt-4'>
                    Existing account?{' '}
                    <Link
                        className='underline'
                        href={'/login'}>
                        Login here &raquo;
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default RegisterPage;
