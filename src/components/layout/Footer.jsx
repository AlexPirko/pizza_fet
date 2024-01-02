import Link from 'next/link';
import { CiLocationOn } from 'react-icons/ci';
import { GrSchedules } from 'react-icons/gr';
import {
    BiLogoFacebookSquare,
    BiLogoInstagramAlt,
    BiLogoTelegram,
} from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className='bg-primary/90 text-white pt-16 flex-[0_0_auto]'>
            <div className='container mx-auto'>
                <div className='flex flex-col justify-between sm:flex-row mb-8'>
                    <div className='text-[10px] w-[300px] mb-8 xl:mb-0'>
                        <p className='text-xs font-semibold tracking-wider'>
                            Online-restaurant PizzaFet
                        </p>
                        <p>
                            is a brand for active and modern residents who value
                        </p>
                        <p>their time anddo not wish to spend it on cooking</p>
                        <div className='text-base text-dark/90 font-semibold pt-1'>
                            Order by{' '}
                            <a
                                className='text-white tracking-wide'
                                href='tel:+180888888888'>
                                +1(808)88888888
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-semibold mb-5'>Info</h4>
                        <ul className='flex flex-col gap-y-6 text-sm text-white/90'>
                            <li className='flex items-end gap-2'>
                                <GrSchedules size={28} />
                                <span>Sunday - Saturday 11am - 11pm</span>
                            </li>
                            <li className='flex items-end gap-2'>
                                <CiLocationOn size={28} />
                                <span>234 Smithdown Road</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-semibold mb-4'>Socials</h4>
                        <ul className='flex flex-col gap-y-5 text-white/90'>
                            <li className='flex items-end gap-2 '>
                                <BiLogoFacebookSquare size={24} />
                                <Link
                                    href='https://facebook.com/'
                                    className='text-sm'>
                                    Facebook
                                </Link>
                            </li>
                            <li className='flex items-end gap-2'>
                                <BiLogoInstagramAlt size={24} />
                                <Link
                                    href='https://instagram.com/'
                                    className='text-sm'>
                                    Instagram
                                </Link>
                            </li>
                            <li className='flex items-end gap-2'>
                                <BiLogoTelegram size={24} />
                                <Link
                                    href='/'
                                    className='text-sm'>
                                    Telegram
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='py-4 border-t border-white/20'>
                    <p className='text-white/80 text-center text-sm'>
                        Copyright &copy; PizzaFet 2024 - All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
