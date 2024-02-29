import React from 'react';
import 'D:/React Projects/RD Mart Website/src/CSS/Logo.css'
const Logo = () =>{
    const RDmartlogo = require('D:/React Projects/RD Mart Website/src/images/RD Mart-logos.jpeg');
    const storeLocatorLogo = require('D:/React Projects/RD Mart Website/src/images/StoreLocator.jpg');
    return(
        <div className="Logo">
            <img src={RDmartlogo}/>
        </div>
    )

}

export default Logo;