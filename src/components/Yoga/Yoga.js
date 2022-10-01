import React from 'react';

const Yoga = ({ yoga, click_to_cart, yogaTotal }) => {

    const { name, for_age, img, time_required } = yoga;


    return (
        <div>
            <div className="card" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">For Age: {for_age}</p>
                    <p className="card-text">Time Required: {time_required}</p>
                    <button onClick={()=>{click_to_cart(time_required,yogaTotal)}} className='btn btn-primary'>add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Yoga;