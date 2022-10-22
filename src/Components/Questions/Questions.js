import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import Option from '../Option/Option';

const SingleQuiz = ({ questionQuiz }) => {
    const { question, options, correctAnswer } = questionQuiz;
    const [isShow, setShow] = useState("true");
    const hunldeToggle = () => {
        setShow(!isShow);

    }
    return (
        <div className='border border-teal-300 mb-8 p-12 rounded-md shadow-lg relative'>
            <div className='absolute top-4 right-12'>
                <EyeIcon onClick={hunldeToggle} className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className='my-8'>{question}</h3>
            <h4 className={isShow ? "hidden ml-2" : undefined}>Answer: {correctAnswer}</h4>
            <div className='md:grid grid-cols-2 mt-8'>
                {
                    options.map(option => <Option key={option.id} option={option} correctAnswer={correctAnswer}></Option>)
                }
            </div>
        </div>
    );
};

export default SingleQuiz;