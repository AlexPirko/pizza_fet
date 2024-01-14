import Image from 'next/image';

const Contact = () => {
    return (
        <section
            id='contact'
            className='py-6 md:py-20'>
            <div className='container mx-auto'>
                <h2 className='mb-6 md:mb-12 uppercase text-dark text-5xl font-semibold text-center'>
                    Contact
                </h2>
                <div className='flex flex-col md:flex-row justify-center py-4 max-w-5xl mx-auto' >
                    <div className='w-full md:w-[50%] text-dark/80 text-lg flex flex-col justify-center items-center'>
                        <div className='flex flex-col items-start gap-4'>
                            <div>
                                <h4 className='font-semibold'>Address:</h4>
                                <p className='ml-2'>183 Barking Rd, Colombo</p>
                            </div>
                            <div>
                                <h4 className='font-semibold'>Phone Number:</h4>
                                <p className='ml-2'>030 4343 6060</p>
                            </div>
                            <div className='max-w-56'>
                                <h4 className='font-semibold'>
                                    Opening Times:
                                </h4>
                                <p className='ml-2'>
                                    Monday 12pm to 10am Tuesday 12pm to 10am
                                    Wednesday 12pm to 10am Thursday 12pm to 10am
                                    Friday 12pm to 11am Saturday 12pm to 11am
                                    Sunday 12pm to 10am
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex md:w-[50%] items-center justify-center md:justify-end'>
                        <Image
                            src={'/pizzeria.jpg'}
                            width={500}
                            height={500}
                            alt={'pizza'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
