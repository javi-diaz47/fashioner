import React from 'react';
import { Link } from 'react-router-dom';
import rightArrow from '../../assets/icons/right-arrow.svg';
import Aqua from '../../assets/aqua.png';

function Hero() {
    return ( 
        <div 
            className="hero"
            style={{
                backgroundImage: `url(${Aqua})`
            }}
        >
            <div className="hero-details">
                <h2 className="hero-title">Aqua</h2>
                <p>As you probably already guessed this collection is</p>
                <p>dedicated to Arua color. Without a doubt. Aqua is</p>
                <p>one of the most important colors which is fresh</p>
           </div>
            <div className="more-details">
                <Link to="/aqua">More</Link>
                <img src={rightArrow} />
            </div>
        </div>
    );
}

export default Hero;