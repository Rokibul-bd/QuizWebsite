import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='shadow-lg md:flex justify-between px-24 items-center'>
            <NavLink className="text-2xl text-teal-600" to="/">Play Quiz Game</NavLink>
            <ul className='md:flex gap-4 py-4 text-xl'>
                <li><NavLink to="/topic">Topic</NavLink></li>
                <li><NavLink to="/static">Static</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;