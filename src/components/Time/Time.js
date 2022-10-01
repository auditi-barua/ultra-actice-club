import React from 'react';
import './Time.css'

const Time = (props) => {
    const { time , id} = props.time;
    const { handleBreak } = props

    
    return (
        <p onClick={()=>{handleBreak(id, time)}}>{time}m</p>
    );
};

export default Time;