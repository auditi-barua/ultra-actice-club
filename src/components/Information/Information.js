import React from 'react';
import './Information.css'

const Information = (props) => {
   // const {information} = props;
    //console.log(props);

    return (
        <div className='information-part'>
       <h3>Auditi Barua</h3>
       <p>Chittagong</p>
       <div className='info-part'>
        <h3> 50 kg</h3>
        <p>Weight</p>
        <h3>5.2 </h3>
        <p>weight</p>
        <h3> 23 years</h3>
        <p>age</p>
       </div>
         
      </div>
        
    );
};

export default Information;