import React from 'react';
import Photo from '../Comments/js.png'
const Comments = () => {
    return (
        <div className='md:flex gap-8 my-28 mx-24'>
            <div>
                <img src={Photo} alt="" />
            </div>
            <div>
                <h4 className='text-4xl mb-4'>library vs framework</h4>
                <p>The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a library is used, the application calls the code from the library</p>
                <p className='my-4'>A framework is a special kind of library that does not contain “finished” functions like a regular library. Frameworks are rather programme scaffolds that provide the blueprint but not the finished unit.</p>
                <p>The framework, therefore, provides the blueprint and the basic framework and also shows what is still needed from the programmer in terms of customisation.</p>
            </div>
        </div>
    );
};

export default Comments;