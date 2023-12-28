import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
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
                    <nav className='flex items-center gap-10 text-lg text-dark/90 font-semibold'>
                        <Link href={'/'}>Menu</Link>
                        <Link href={'/'}>About</Link>
                        <Link href={'/'}>Contact</Link>
                    </nav>
                    <nav className='flex items-center gap-4 text-lg text-dark/90 font-semibold'>
                        <Link href={'/'}>Login</Link>
                        <Link
                            href={'/'}
                            className='bg-primary text-white rounded-full px-6 py-2 hover:bg-primaryHover'>
                            Registration
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
