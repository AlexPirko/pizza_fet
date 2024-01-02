'use client';
import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
    const session = useSession();
    const status = session.status;
    return (
        <header className='flex-[0_0_auto]'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between pt-4'>
                    <div className='flex items-center gap-6'>
                        <Link href='/'>
                            <Image
                                src='/logo.png'
                                width={125}
                                height={70}
                                alt='logo'
                            />
                        </Link>
                        <div className='text-lg text-dark/90 font-semibold'>
                            Order by{' '}
                            <a
                                className='text-primary tracking-wide'
                                href='tel:+180888888888'>
                                +1(808)88888888
                            </a>
                        </div>
                    </div>
                    <nav className='flex items-center text-lg text-dark/90 font-semibold'>
                        <Link
                            href={'/'}
                            className='pr-12'>
                            Home
                        </Link>
                        <Link
                            href={'/'}
                            className='pr-12'>
                            Menu
                        </Link>
                        <Link
                            href={'/'}
                            className='pr-12'>
                            About
                        </Link>
                        <Link
                            href={'/'}
                            className='pr-16'>
                            Contact
                        </Link>
                        {status === 'authenticated' && (
                            <button
                                onClick={() => signOut()}
                                className='btn !py-2 text-base'>
                                Logout
                            </button>
                        )}
                        {status !== 'authenticated' && (
                            <>
                                <Link
                                    href={'/login'}
                                    className='pr-4'>
                                    Login
                                </Link>
                                <Link
                                    href={'/register'}
                                    className='btn !py-2 text-base'>
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
