import React from 'react';
import './Details.css'

const Details = (detail) => {
    //console.log(detail);
    const {name, img, details, age,time} = detail;

    return (
        <div className='details'>
          
          <img src={img} alt=''/>
          <div className='info'>
            <p>{name}</p>
            <p>{details}</p>
            <p><small>For Age: {age}</small></p>
            <p><small>Time required: {time}</small></p>
        </div>
        <button  className='btn-cart'>
            <p>Added to list</p>
         </button>
           
        </div>
    );
};

export default Details;