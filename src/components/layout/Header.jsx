'use client';
import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { CartContext } from '../AppContext';
import { useContext } from 'react';
import { FaBasketShopping } from 'react-icons/fa6';

const Header = () => {
    const session = useSession();
    const status = session?.status;
    const userData = session.data?.user;
    const { cartProducts } = useContext(CartContext);
    let userName = userData?.name || userData?.email;
    if (userName && userName.includes(' ')) {
        userName = userName.split(' ')[0];
    }

    return (
        <header className='flex-[0_0_auto]'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between pt-4'>
                    <div className='flex items-center'>
                        <Link href='/'>
                            <Image
                                src='/logo.png'
                                width={125}
                                height={70}
                                alt='logo'
                            />
                        </Link>
                        <nav className='flex items-center text-lg text-dark/90 font-semibold ml-16'>
                            <Link
                                href={'/'}
                                className='pr-12'>
                                Home
                            </Link>
                            <Link
                                href={'/#menu'}
                                className='pr-12'>
                                Menu
                            </Link>
                            <Link
                                href={'/#about'}
                                className='pr-12'>
                                About
                            </Link>
                            <Link
                                href={'/#contact'}
                                className='pr-16'>
                                Contact
                            </Link>
                        </nav>
                    </div>

                    <div className='flex items-center justify-between gap-6'>
                        <Link
                            href={'/cart'}
                            className='flex items-start mb-2'>
                            <FaBasketShopping className='text-primary' size={32}/>
                            {cartProducts?.length > 0 && (
                                <span className='bg-primary/90 text-white text-xs py-1 px-1.5 rounded-full'>
                                    {cartProducts.length}
                                </span>
                            )}
                        </Link>
                        {status === 'authenticated' && (
                            <div>
                                <Link
                                    href={'/profile'}
                                    className='pr-4 text-primary text-base xl:text-lg'>
                                    Hello, {userName}
                                </Link>
                                <button
                                    onClick={() => signOut()}
                                    className='btn !py-2 text-base'>
                                    Logout
                                </button>
                            </div>
                        )}
                        {status === 'unauthenticated' && (
                            <div>
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
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
