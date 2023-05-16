import React from 'react';
import Background from '../images/background.jpeg';

const Home = () => {
    return (
        <div className="container">
            <img src={ Background } className="bg-image" alt="background"/>
            <ul className="text">
                <li>RARE,</li>
                <li>FIRST PRESSINGS,</li>
                <li>OUT OF PRINT,</li>
                <li>POST-PUNK</li>
                <li>RECORDS.</li>
            </ul>
        </div>
    )
}

export default Home;