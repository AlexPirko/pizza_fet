'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { IoLogoGoogle } from 'react-icons/io';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginInProgress(true);

        await signIn('credentials', { email, password, callbackUrl: '/' });

        setLoginInProgress(false);
    };

    return (
        <section className='mt-8 flex-auto'>
            <h1 className='mb-6 text-center text-dark text-4xl font-semibold xl:text-5xl'>
                Login
            </h1>
            <form
                className='flex flex-col gap-1 max-w-xs mx-auto'
                onSubmit={handleSubmit}>
                <input
                    type='email'
                    name='email'
                    placeholder='email'
                    value={email}
                    disabled={loginInProgress}
                    onChange={(ev) => setEmail(ev?.target?.value)}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={password}
                    disabled={loginInProgress}
                    onChange={(ev) => setPassword(ev?.target?.value)}
                />
                <button
                    disabled={loginInProgress}
                    className='submit'
                    type='submit'>
                    Login
                </button>
                <div className='my-2 text-center text-dark/90'>
                    or login with provider
                </div>
                <button
                    type='button'
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                    className='btn__outline w-full flex items-center justify-center gap-2'>
                    <IoLogoGoogle size={24} />
                    Login with Google
                </button>
                <div className='my-4 text-center text-dark border-t pt-4'>
                    Don&#39;t have an account?{' '}
                    <Link
                        className='underline'
                        href={'/register'}>
                        Register here &raquo;
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default LoginPage;
