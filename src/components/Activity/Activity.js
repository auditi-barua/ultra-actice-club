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
  .then(data => setInformation(data));

 }, [])
 
   
    return (
        <div className='activity'>
          <h1>Select today's activities</h1>
          <div className='activities-container'>
            <div className='information-container'> 

              {
                  details.map(detail=><Details key={detail.id}
                    detail={detail}
                    ></Details>)
              }
             </div>

          </div>
          <div>
            <Information information={information}></Information>
          </div>
        </div>
      
    );
};

export default Activity;