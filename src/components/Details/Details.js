import React from 'react';
import './Details.css'

const Details = (props) => {
    console.log(props)
    return (
        <div className=''>
            <h1>Total Time</h1>
            <p>Exercise Time:</p>
            <p>Break Time: </p>
        </div>
    );
};

export default Details;