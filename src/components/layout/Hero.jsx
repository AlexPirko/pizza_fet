import Image from 'next/image';

const Hero = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div className='flex justify-between py-4'>
                    <div className='w-[40%] pl-8 py-20 xl:py-36'>
                        <h1 className='text-dark text-4xl font-semibold xl:text-5xl'>
                            The most delicious Italian dish is, of course,
                            <span className='text-primary'> Pizza!</span>
                        </h1>
                        <p className='mt-8 mb-2 text-dark/80'>
                            To ensure its truly delicious taste, PizzaFet pays
                            attention to the freshness of ingredients,
                            cleanliness of workspaces, and the quality of
                            services provided.
                        </p>
                        <p className='mb-8 text-dark/80'>
                            And not everyone knows that the main thing in our
                            business is skill, love for fresh ingredients,
                            and... a lot of creativity!
                        </p>

                        <div className='text-xl text-dark/90 font-semibold'>
                            Order by{' '}
                            <a
                                className='text-primary tracking-wide text-2xl'
                                href='tel:+180888888888'>
                                +1(808)88888888
                            </a>
                        </div>
                    </div>
                    <div className='w-[60%] flex items-center justify-end'>
                        <Image
                            src={'/pizza_hero.png'}
                            width={600}
                            height={600}
                            alt={'pizza'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
