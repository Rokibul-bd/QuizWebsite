import React from 'react';

const Option = ({ option }) => {
    return (
        <div className='border-teal-400 border p-2 m-2 rounded-sm'>
            <p> <input className='mx-2' type="radio" value={option} />{option}</p>
        </div>
    );
};

export default Option;