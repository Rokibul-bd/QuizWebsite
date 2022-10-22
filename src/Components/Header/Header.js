import { Bars3Icon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isShow, setShow] = useState(true);
    const toggleButton = () => {
        setShow(!isShow)
    }
    return (
        <nav className='shadow-lg flex justify-between px-24 items-center relative py-4'>
            <NavLink className="text-2xl text-teal-600" to="/">Play Quiz Game</NavLink>
            <Bars3Icon onClick={toggleButton} className='h-6 w-6 absolute top-2 right-4 md:hidden'></Bars3Icon>
            <div className={isShow ? 'block' : 'hidden'}>
                <ul className='md:flex gap-4 py-4 text-xl'>
                    <li><NavLink to="/topic">Topic</NavLink></li>
                    <li><NavLink to="/static">Static</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;