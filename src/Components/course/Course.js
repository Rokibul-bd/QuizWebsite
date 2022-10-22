import React from 'react';
import { NavLink } from 'react-router-dom';

const Course = ({ course }) => {
    const { name, logo, total, id } = course
    return (
        <div className='bg-slate-500 shadow-md rounded-lg p-4 mx-4 text-white mb-2 md:mb-0'>
            <h3 className='text-2xl'>Total quiz of {name} : {total}</h3>
            <img className='my-4' src={logo} alt="" />
            <div className='flex justify-between'>
                <h3 className='text-2xl'>{name}</h3>
                <NavLink to={`/${id}`}>
                    <button className='bg-white shadow-md rounded-md text-black px-4 hover:bg-slate-300'>Start Practice</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Course;