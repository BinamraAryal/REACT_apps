import React from 'react';
import { FaGoogle, FaYelp } from 'react-icons/fa'; // Importing the icons
import 'D:/React Projects/RD Mart Website/src/CSS/ReviewUs.css';

const ReviewUs = () =>{
    const reviewSymbols = [
        { icon: <FaGoogle size={50} color="#4285F4" />, href: "https://www.google.com" },
        { icon: <FaYelp size={50} color="#AF0606"/>, href: "https://www.yelp.com" }
    ];

    return(
        <div className="ReviewUs">
            <h1>Your Opinion Matters.</h1>
            <h2>Review us on:</h2>
            <div className="ReviewSymbols">
            {reviewSymbols.map((symbol, index) => (
                <a key={index} href={symbol.href} target="_blank" rel="noopener noreferrer">
                    {symbol.icon}
                </a>
            ))}
            </div>
        </div>
    );
};

export default ReviewUs;
