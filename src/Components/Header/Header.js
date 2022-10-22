import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='shadow-lg md:flex justify-between px-24 items-center'>
            <Link to="/">Logo</Link>
            <ul className='md:flex gap-4 py-4 text-xl'>
                <li><Link href="/topic">Topic</Link></li>
                <li><Link href="/static">Static</Link></li>
                <li><Link href="/blog">Blog</Link></li>
            </ul>
        </nav>
    );
};

export default Header;