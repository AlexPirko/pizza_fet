import Image from 'next/image';
import MenuItem from '../menu/MenuItem';

const Menu = () => {
    return (
        <section className='py-20'>
            <div className='container mx-auto'>
                <div className='relative -top-10 -left-10 -right-15'>
                    <div className='w-72 h-72 absolute -left-12 -bottom-24 -z-10'>
                        <Image
                            src={'/cherry.png'}
                            layout='fill'
                            objectFit='contain'
                            alt='cherry'
                        />
                    </div>
                    <div className='w-80 h-80 absolute -right-20 -bottom-48 -z-10'>
                        <Image
                            src={'/pepper.png'}
                            layout='fill'
                            objectFit='contain'
                            alt='pepper'
                        />
                    </div>
                </div>

                <div className='text-center'>
                    <h2 className='uppercase text-dark text-4xl font-semibold mb-16'>
                        our menu
                    </h2>
                </div>
                <div className='grid grid-cols-3 gap-6'>
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                </div>
            </div>
        </section>
    );
};

export default Menu;
