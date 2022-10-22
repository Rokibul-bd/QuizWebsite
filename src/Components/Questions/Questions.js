import React from 'react';

const SingleQuiz = ({ questionQuiz }) => {
    const { question, options } = questionQuiz
    return (
        <div className='border border-teal-300 mb-8 p-12 rounded-md shadow-lg'>
            <h3 className='my-8'>{question}</h3>
            {
                options.map(option => <div>this </div>)
            }
        </div>
    );
};

export default SingleQuiz;