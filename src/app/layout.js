import { Roboto } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AppProvider } from '@/components/AppContext';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className={roboto.className}>
                <AppProvider>
                    <Toaster/>
                    <Header />
                    {children}
                    <Footer />
                </AppProvider>
            </body>
        </html>
    );
}
