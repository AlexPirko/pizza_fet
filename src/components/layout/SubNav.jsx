'use client';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const SubNav = ({ containerStyles }) => {
    const session = useSession();
    const status = session?.status;
    const userData = session?.data?.user;

    let userName = userData?.name || userData?.email;
    if (userName && userName.includes(' ')) {
        userName = userName.split(' ')[0];
    }
    if (userName && userName.includes('@')) {
        userName = userName.split('@')[0];
    }

    return (
        <div className={`${containerStyles}`}>
            {status === 'authenticated' && (
                <div className='flex flex-col items-center gap-2 md:flex-row'>
                    <Link
                        href={'/profile'}
                        className='pr-4 text-primary text-base font-semibold xl:text-lg'>
                        Hi, {userName}
                    </Link>
                    <button
                        onClick={() => signOut()}
                        className='btn !py-1.5 text-base'>
                        Logout
                    </button>
                </div>
            )}
            {status === 'unauthenticated' && (
                <div className='flex flex-col items-center gap-2 md:flex-row'>
                    <Link
                        href={'/login'}
                        className='pr-4'>
                        Login
                    </Link>
                    <Link
                        href={'/register'}
                        className='btn !py-1.5 text-base'>
                        Register
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SubNav;
