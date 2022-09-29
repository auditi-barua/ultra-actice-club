import React, { useEffect, useState } from 'react';
import Information from '../Information/Information';
import Details from '../Details/Details';
import './Activity.css';

const Activity = (props) => {
  const [details,setDetails] = useState([]);
  const [information,setInformation] = useState([]); 
 
 useEffect( () =>{
  fetch('information.json')
  .then(res => res.json())
  .then(data => setDetails(data));

 }, [])
 
   
    return (
        <div className='activity'>
          <h1>Select today's activities</h1>
          <div className='activities-container'>
            <div className='information-container'>
               <h2>Auditi </h2>
               <p>Chattogram</p>
               <div>
                <p>50kg</p> 
              </div>
              <h4>Exercise Details: </h4>
              <p>Exercise Time</p>
              <p>Break Time</p>
              
              {
                  information.map(information=><Information key={information.id}
                    information={information}
                    ></Information>)
              }
             </div>

          </div>
          <div>
            <Details detail={details}></Details>
          </div>
        </div>
      
    );
};

export default Activity;