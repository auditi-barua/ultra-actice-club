import React from 'react';
import './Details.css'

const Details = ({detail,handleAddToDetails}) => {
    const {name, img, details, age,time} = detail;
   

    return (
        <div className='details'>
           <img src={img} alt=''></img>
        <div className='info'>
          <h2 className='details-name'>{name}</h2>
          <p>{details.slice(0,100)}..</p>
          <p>For Age: {age}</p>
          <p>Time Required: {time}</p>
      </div>
      <button onClick={() => handleAddToDetails(details)} className='btn'>
          <p>Added to list</p>
       </button>
        </div>
  
    );
};

export default Details;