import React from 'react';
import 'D:/React Projects/RD Mart Website/src/CSS/StoreLocator.css';
const StoreLocator= () => {
    const locatorImageSrc = require('D:/React Projects/RD Mart Website/src/images/map.png');

    return(
        <div className="StoreLocator">
            <div className="LocatorTextWrapper">
            <h1><u>Click the icon for store's directions</u></h1>
            </div>
            <a href="#"><img src={locatorImageSrc}/></a>
        </div>
    );
}

export default StoreLocator;