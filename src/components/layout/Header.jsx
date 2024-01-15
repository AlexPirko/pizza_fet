'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaBasketShopping } from 'react-icons/fa6';
import { useContext, useEffect, useState } from 'react';

import Nav from './Nav';
import NavMobile from './NavMobile';
import SubNav from './SubNav';
import { CartContext } from '../AppContext';

const Header = () => {
    const [active, setActive] = useState(false);
    const { cartProducts } = useContext(CartContext);

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                active ? 'bg-dark-heavy py-4' : 'bg-none py-8'
            } flex-[0_0_auto]`}>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between pt-4'>
                    <NavMobile
                        containerStyles='lg:hidden'
                        iconStyles='text-3xl text-white'
                        linkStyles='uppercase text-white cursor-pointer'
                    />
                    <div className='flex xl:gap-6'>
                        <Link href='/'>
                            <Image
                                src='/logo.png'
                                width={125}
                                height={70}
                                alt='logo'
                            />
                        </Link>
                        <Nav
                            containerStyles='hidden lg:flex items-center text-lg text-dark/90 font-semibold'
                            linkStyles='capitalize ml-10 cursor-pointer'
                        />
                    </div>
                    <SubNav containerStyles='hidden md:flex items-center justify-between' />
                    <div className='relative'>
                        <Link
                            alt='shop basket'
                            href={'/cart'}
                            className='absolute -top-5 right-8 xl:right-40 flex items-start mb-2'>
                            <FaBasketShopping
                                alt='shop cart'
                                className='text-primary'
                                size={36}
                            />
                            <span className='hidden'>Shop Cart</span>
                            {cartProducts?.length > 0 && (
                                <span className='bg-primary/90 text-white text-xs py-1 px-1.5 rounded-full'>
                                    {cartProducts.length}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
