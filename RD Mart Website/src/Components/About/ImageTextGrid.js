import React from 'react';
import 'D:/React Projects/RD Mart Website/src/CSS/ImageTextGrid.css';
const ImageTextGrid = () =>{
    const imageList = [{
        src:require('D:/React Projects/RD Mart Website/src/images/mock1.jpg'),
        title:"Owner",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },{
        src:require('D:/React Projects/RD Mart Website/src/images/mock2.jpg'),
        title:"Community",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }];
    return(
        <div className ="ImageTextGrid">
        <div className="ImageTextGridWrapper">
            {imageList.map((image, index) => (
        <div key={index} className={`Items ${index % 2 === 0 ? 'even' : 'odd'}`}>
                <img src={image.src} alt={`${index + 1}`} />
            <div className="TextContainer">
                <h2>{image.title}</h2>
                <p>{image.description}</p>
            </div>
        </div>
      ))}
      </div>
        </div>
    )
}
export default ImageTextGrid;