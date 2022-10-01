import React, { useEffect, useState } from 'react';
import Time from '../Time/Time';
import './Cart.css'

const Cart = (props) => {
   
    const { times, yogaTotal } = props;
    const [break_time, setBreak_time] = useState(0);
    const [total_time, setTotal_time] = useState(0);
    useEffect(() => {
        setTotal_time(yogaTotal);
    },[yogaTotal])



    useEffect(() => {
        let timeCount = {};
        const stored_time = localStorage.getItem('break-time');
        if (stored_time) {
            timeCount = JSON.parse(stored_time);
        }
        for (const id in timeCount) {
            setBreak_time(timeCount[id]);
        }
    }, [])


    const handleBreak = (id, time) => {
        let timeCount = {};
        const storedCart = localStorage.getItem('break-time');
        if (storedCart) {
            localStorage.removeItem('break-time');
        }
        const quantity = timeCount[id];
        if (quantity) {
            timeCount[id] = time;
        }
        else {
            timeCount[id] = time;
        }
        localStorage.setItem('break-time', JSON.stringify(timeCount));
        setBreak_time(time);
    }


    return (
        <div>
            <div className="user">
                <img src="./images/user.png" alt="" />
                <div className='user_info'>
                    <h4>Khalid Farhan</h4>
                    <p>Naraanganj, Dhaka</p>
                </div>
            </div>
            <div className='info'>
                <div className='single_info'>
                    <div className='text'>
                        <h4>75</h4>
                        <small>kg</small>
                    </div>
                    <p>Weight</p>
                </div>
                <div className='single_info'>
                    <h4>6.5</h4>
                    <p>Height</p>
                </div>
                <div className='single_info'>
                    <div className='text'>
                        <h4>25</h4>
                        <small>yrs</small>
                    </div>
                    <p>age</p>
                </div>
            </div>
            <div className='break_container'>
                <h4>Add a Break</h4>
                <div className='break_time'>
                    {
                        times.map(time => <Time handleBreak={handleBreak} key={time.id} time={time}></Time>)
                    }
                </div>
            </div>
            <div className='details_container'>
                <h4>Time Details</h4>
                <div className='time_container'>
                    <div className='time_details'>
                        <p>Yoga Time</p>
                        <p>{total_time} min</p>
                    </div>
                    <div className='time_details'>
                        <p>Yoga Time</p>
                        <p>{break_time} min</p>
                    </div>
                </div>
                <button className='btn btn-primary'>Activity Complete</button>
            </div>
        </div>
    );
};

export default Cart;