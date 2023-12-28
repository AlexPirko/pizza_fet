import About from './components/layout/About';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Menu from './components/layout/Menu';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Menu />
            <About />
            <Footer />
        </>
    );
}
