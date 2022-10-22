import React from 'react';

const Blog = ({ question, ans }) => {
    return (
        <div className='shadow-lg rounded-md md:w-3/4 mx-auto mt-24 p-4'>
            <h3 className='my-4 text-2xl font-semibold'>Questions <b className='mr-2'>:</b> {question}</h3>
            <p>Ans <b className='mr-2'>:</b> {ans}</p>
        </div>
    );
};

export default Blog;