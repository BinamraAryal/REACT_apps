import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importing the icons
import 'D:/React Projects/RD Mart Website/src/CSS/FollowUs.css';

const FollowUs = () =>{
    const followSymbols = [
        { icon: <FaFacebook size={50} color="#3b5998"/>, href: "https://www.facebook.com/example" },
        { icon: <FaInstagram size={50} color="#c13584"/>, href: "https://www.instagram.com/example" },
        { icon: <FaTwitter size={50} color="#1da1f2"/>, href: "https://twitter.com/example" }
    ];

    return(
        <div className="FollowUs">
            <h1>We will keep you posted.</h1>
            <h2>Follow us on:</h2>
            <div className="FollowSymbols">
            {followSymbols.map((symbol, index) => (
                <a key={index} href={symbol.href} target="_blank" rel="noopener noreferrer">
                    {symbol.icon}
                </a>
            ))}
            </div>
        </div>
    );
};

export default FollowUs;
