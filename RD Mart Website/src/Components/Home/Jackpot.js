import React from 'react';
import 'D:/React Projects/RD Mart Website/src/CSS/Jackpot.css';
const Jackpot = () => {
    const lotteryImageList = [{src:require('D:/React Projects/RD Mart Website/src/images/megamillions.jpg')},{src:require('D:/React Projects/RD Mart Website/src/images/texasLottery.jpg')},{src:require('D:/React Projects/RD Mart Website/src/images/powerball.jpg')}];

    return(
        <div className="Jackpot">
            <h1>Win Big with us!</h1>
            <div className="JackpotWrapper">
                {lotteryImageList.map((lotteryImage, index)=>(
                    <div className="ImageAndJackpot">
                    <img key={index}
                         src={lotteryImage.src}
                    />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Jackpot;