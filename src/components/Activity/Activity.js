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

 }, []);

 const handleAddToDetails = (details) =>{
  console.log(details);
  const newInformation =[...details,information];
  setInformation(newInformation);
 
 }   
    return ( 
          <div className='activities-container'>
            <div className='details-container'> 
              {
                  details.map(detail=><Details key={detail.id}
                    detail={detail}
                    handleAddToDetails={handleAddToDetails}
                    ></Details>)
              }
             </div>
             <div className='information'>
            <Information information={information}></Information>
          </div>
        </div>
      
    );
};

export default Activity;