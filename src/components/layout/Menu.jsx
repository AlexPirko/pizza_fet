'use client';
import Image from 'next/image';
import MenuGallery from '../menu/MenuGallery';

const Menu = () => {
    return (
        <section
            id='menu'
            className='py-20'>
            <div className='container mx-auto'>
                <div className='relative -top-10 -left-10 -right-15'>
                    <div className='w-72 h-72 absolute -left-32 -bottom-36 md:-left-12 md:-bottom-24 -z-10'>
                        <Image
                            src={'/cherry.png'}
                            alt='cherry'
                            fill
                        />
                    </div>
                    <div className='hidden md:block w-80 h-80 absolute -right-48 -bottom-28 md:-right-16 md:-bottom-48 -z-10'>
                        <Image
                            src={'/pepper.png'}
                            alt='pepper'
                            fill
                        />
                    </div>
                </div>

                <div className='text-center'>
                    <h2 className='uppercase text-dark text-5xl font-semibold mb-12'>
                        Our menu
                    </h2>
                </div>
                <MenuGallery />
            </div>
        </section>
    );
};

export default Menu;
