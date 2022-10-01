import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Question from '../Question/Question';
import Yoga from '../Yoga/Yoga';
import './main.css';

const Main = () => {
    const [yogas, setYoga] = useState([]);
    const [times, setTimes] = useState([]);
    const[yogaTotal, setYogaTotal] = useState(0);
    

    useEffect(() => {
        fetch('./time.json')
            .then(res => res.json())
            .then(data => setTimes(data))
    },[])

    useEffect(() => {
        fetch('./information.json')
            .then(res => res.json())
            .then(data => setYoga(data))
    }, [])

    const click_to_cart = (time, yogaTotal) => {
        let final_time = 0;
        final_time = yogaTotal + time;
        setYogaTotal(final_time);
    }

    return (

        <div className='main-container'>
            <div className='container'>
                <div className='logo'>
                    <img src="./images/logo-main.png" alt="" />
                    <h2>Yoga</h2>
                </div>
                <div className="yoga-container">
                    {
                        yogas.map(yoga => <Yoga yogaTotal={yogaTotal} click_to_cart={click_to_cart} key={yoga.id} yoga={yoga}></Yoga>)
                    }
                </div>
                <div className='question'>
                    <Question></Question>
                </div>
            </div>
            <div className='cart'>
                <Cart times={times} yogaTotal={yogaTotal}></Cart>
            </div>
        </div>

    );
};

export default Main;