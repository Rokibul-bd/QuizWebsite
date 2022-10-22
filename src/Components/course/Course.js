import React from 'react';

const Course = ({ course }) => {
    const { name, logo } = course
    return (
        <div>
            <img src={logo} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Course;