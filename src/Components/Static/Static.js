import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Static = () => {
    const dataLoad = useLoaderData();
    const data = dataLoad.data
    return (
        <div className='w-2/4 mx-auto my-28'>
            <LineChart width={600} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <Line type="monotone" dataKey="id" stroke="#2b2b2b" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Static;