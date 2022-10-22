import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = ({ option }) => {

    const notify = () => toast("Wow it's correct Answer!");

    return (
        <div>
            <div>
                <ToastContainer></ToastContainer>
            </div>
            <div className='border-teal-400 border p-2 m-2 rounded-sm'>
                <p> <input onClick={notify} className='mx-2' type="radio" value={option} />{option}</p>
            </div>
        </div>
    );
};

export default Option;