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
        <footer
            id='contact'
            className='bg-primaryDark/90 text-white pt-16 flex-[0_0_auto]'>
            <div className='container mx-auto'>
                <div className='flex flex-col justify-between gap-8 md:flex-row mb-8'>
                    <div className='text-[10px] w-[300px] md:mb-8 xl:mb-0'>
                        <p className='text-xs font-semibold tracking-wider'>
                            Online-restaurant PizzaFet
                        </p>
                        <p className='text-white font-thin'>
                            is a brand for active and modern residents who value
                        </p>
                        <p>their time anddo not wish to spend it on cooking</p>
                        <div className='text-base font-semibold pt-1'>
                            Order by{' '}
                            <a
                                className='text-white tracking-wide font-thin'
                                href='tel:+180888888888'>
                                +1(808)88888888
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className='font-semibold mb-5'>Info</div>
                        <ul className='flex flex-col gap-y-6 text-sm text-white/90'>
                            <li className='flex items-end gap-2'>
                                <GrSchedules size={28} />
                                <span>Sunday - Saturday 12pm to 10am</span>
                            </li>
                            <li className='flex items-end gap-2'>
                                <CiLocationOn size={28} />
                                <span>183 Barking Rd, Colombo</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='font-semibold mb-4'>Socials</div>
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
                    <p className='text-white/80 text-center text-sm font-thin'>
                        Copyright &copy; PizzaFet 2024 - All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
