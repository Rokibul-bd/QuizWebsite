import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions'

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz.data);
    const quizData = quiz.data
    const { name, questions } = quizData
    return (
        <div className='mb-12'>
            <h3 className='text-center text-4xl text-purple-600 my-28'>Quiz Of {name}</h3>
            <div className='py-12 mx-24'>
                {
                    questions.map(questionQuiz => <Questions key={questionQuiz.id} questionQuiz={questionQuiz}></Questions>)
                }
            </div>
        </div>
    );
};

export default Quiz;