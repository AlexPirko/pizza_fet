import About from '@/components/layout/About';
import Contact from '@/components/layout/Contact';
import Hero from '@/components/layout/Hero';
import Menu from '@/components/layout/Menu';

export default function Home() {
    return (
        <main className='flex-[1_0_auto]'>
            <Hero />
            <Menu />
            <About />
            <Contact />
        </main>
    );
}
