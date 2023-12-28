import Image from 'next/image';

const About = () => {
    return (
        <section>
            <div className='container mx-auto'>
            <div className='relative -top-10 -left-10 -right-15'>
                    <div className='w-80 h-80 absolute -right-20 -bottom-48 -z-10'>
                        <Image
                            src={'/basilik.png'}
                            layout='fill'
                            objectFit='contain'
                            alt='basilik'
                        />
                    </div>
                </div>
                <h2 className='my-6 uppercase text-dark text-4xl font-semibold text-center'>
                    About Us
                </h2>
                <div className='flex justify-start gap-8 py-4'>
                    <div className='w-[30%] flex items-center justify-end'>
                        <Image
                            src={'/pizza-cook.jpg'}
                            width={300}
                            height={300}
                            alt={'pizza'}
                        />
                    </div>
                    <div className='w-[55%] text-dark/80 text-lg flex flex-col gap-2 py-8'>
                        <p>
                            Welcome to PizzaFet – where a passion for Italian
                            cuisine transforms into an unparalleled experience.
                        </p>
                        <p>
                            Our story begins with a love for fresh, high-quality
                            ingredients, proudly embodied in every pizza we
                            create. We strive to maintain the highest standards
                            of cleanliness and quality to ensure each order
                            remains consistently delicious and comfortable.
                        </p>
                        <p>
                            Our goal is to craft not just a dish but a culinary
                            journey for you, full of flavor discoveries.
                            PizzaFet is more than just pizza; it&apos;s art in
                            every bite. Join us and savor the authentic taste of
                            Italy right in the comfort of your home.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
