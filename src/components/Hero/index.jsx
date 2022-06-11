import React from 'react';
import { Link } from 'react-router-dom';
import rightArrow from '../../assets/icons/right-arrow.svg';

function Hero({slide}) {
    
    const { img, color, title, details} = slide;

    return ( 
        <div 
            className="hero"
            style={{
                backgroundImage: `url(${img})`,
                backgroundColor: color
            }}
        >
            <div className="hero-details">
                <h2 className="hero-title">
                    {title}
                </h2>
                {
                    details.map((detail, i) => (
                        <p key={i}>
                            {detail}
                        </p>
                    ))
                }
            </div>
            <div className="more-details">
                <Link to="/aqua">More</Link>
                <img src={rightArrow} />
            </div>
        </div>
    );
}

export { Hero };