import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../course/Course'
const Courses = () => {
    const courseData = useLoaderData();
    const data = courseData.data;
    return (
        <div>
            <h2 className='text-4xl text-center text-red-500 my-24'>This is Courses Components</h2>
            <div className='md:grid grid-cols-4 mx-8'>
                {
                    data.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;