import React from 'react';
import 'D:/React Projects/RD Mart Website/src/CSS/SplitTextImages.css';

const SplitTextImages = () => {
  const imageSrc = require('D:/React Projects/RD Mart Website/src/images/mock1.jpg');


  return (
    <div className="SplitTextImages">
      <div className="TextContainer2">
        <p className = "QuotedParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="Author">- John Doe</p>
      </div>
      <div className="VerticalLine" />
      <div className="ImageContainer">
        <img src={imageSrc} alt="Image"/>
      </div>
    </div>
  );
};

export default SplitTextImages;