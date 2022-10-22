import React from 'react';
import Option from '../Option/Option';

const SingleQuiz = ({ questionQuiz }) => {
    const { question, options } = questionQuiz
    return (
        <div className='border border-teal-300 mb-8 p-12 rounded-md shadow-lg'>
            <h3 className='my-8'>{question}</h3>
            <div className='md:grid grid-cols-2'>
                {
                    options.map(option => <Option key={option.id} option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default SingleQuiz;