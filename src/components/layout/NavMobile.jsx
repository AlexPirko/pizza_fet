'use client';

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Image from 'next/image';
import Link from 'next/link';

import { RiMenu2Line, RiHomeFill } from 'react-icons/ri';
import { IoCloseOutline } from 'react-icons/io5';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { FaUsers, FaEnvelope } from 'react-icons/fa';
import SubNav from './SubNav';

const links = [
    {
        icon: <RiHomeFill />,
        path: '/',
        name: 'home',
        offset: 0,
    },
    {
        icon: <BiSolidFoodMenu />,
        path: '/#menu',
        name: 'menu',
        offset: 0,
    },
    {
        icon: <FaUsers />,
        path: '/#about',
        name: 'about',
        offset: 0,
    },
    {
        icon: <FaEnvelope size={26} />,
        path: '/#contact',
        name: 'contact',
        offset: 0,
    },
];

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={`${containerStyles}`}>
            <div className='cursor-pointer outline-none'>
                <RiMenu2Line className='text-3xl text-dark transition-all duration-300' />
            </div>
            <aside
                className={`${
                    isOpen ? 'right-0' : '-right-full'
                } bg-dark fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}>
                <div className='flex flex-col items-center justify-center h-full'>
                    <div
                        onClick={() => setIsOpen(false)}
                        className='cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 bg-primary hover:bg-primary-hover flex items-center justify-center transition-all duration-500'>
                        <IoCloseOutline />
                    </div>
                    <div className='flex flex-col gap-y-8'>
                        {links.map((link, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={link.path}
                                    offset={link.offset}
                                    className='flex items-center gap-x-3'>
                                    <div className={`${iconStyles}`}>
                                        {link.icon}
                                    </div>
                                    <div className={`${linkStyles}`}>
                                        {link.name}
                                    </div>
                                </Link>
                            );
                        })}
                        <SubNav />
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default NavMobile;
