import Link from "next/link";

const links = [
    {
        path: '/',
        name: 'home',
        offset: -50,
    },
    {
        path: '/#menu',
        name: 'menu',
        offset: -50,
    },
    {
        path: '/#about',
        name: 'about',
        offset: -150,
    },
    {
        path: '/#contact',
        name: 'contact',
        offset: 0,
    },
];

const Nav = ({ containerStyles, linkStyles }) => {
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link
                        key={index}
                        href={link.path}
                        offset={link.offset}
                        className={`${linkStyles}`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
