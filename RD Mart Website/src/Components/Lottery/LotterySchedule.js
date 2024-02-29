import React from 'react';
import 'D:/React Projects/RD Mart Website/src/CSS/LotterySchedule.css';
const LotterySchedule = () =>{
    const lotteryList = [{
        lotteryName:"All or Nothing",
        imageSRC:require('D:/React Projects/RD Mart Website/src/images/mock1.jpg'),
        lotteryDrawDays:"MON - SAT",
        lotteryDrawBreaks:["9:50 AM","12:17 PM","5:50 PM","10:02 PM"],
        lotteryDrawTimes:["10:00 AM", "12:27 PM","6:00 PM", "10:12 PM" ]
    },{
        lotteryName:"Pick 3",
        imageSRC:require('D:/React Projects/RD Mart Website/src/images/mock2.jpg'),
        lotteryDrawDays:"MON - SAT",
        lotteryDrawBreaks:["9:50 AM","12:17 PM","5:50 PM","10:02 PM"],
        lotteryDrawTimes:["10:00 AM", "12:27 PM","6:00 PM", "10:12 PM" ]
    },{
        lotteryName:"Pick4",
        imageSRC:require('D:/React Projects/RD Mart Website/src/images/mock3.jpg'),
        lotteryDrawDays:"MON - SAT",
        lotteryDrawBreaks:["9:50 AM","12:17 PM","5:50 PM","10:02 PM"],
        lotteryDrawTimes:["10:00 AM", "12:27 PM","6:00 PM", "10:12 PM" ]
    },{
        lotteryName:"Cash 5",
        imageSRC:require('D:/React Projects/RD Mart Website/src/images/mock1.jpg'),
        lotteryDrawDays:"MON - SAT",
        lotteryDrawBreaks:["10:02 PM"],
        lotteryDrawTimes:["10:12 PM"]
    },{
        lotteryName:"Texas Two Step",
        imageSRC:require('D:/React Projects/RD Mart Website/src/images/mock2.jpg'),
        lotteryDrawDays:"MON | THURS",
        lotteryDrawBreaks:["10:02 PM"],
        lotteryDrawTimes:["10:12 PM"]
    },{
        lotteryName:"Mega Millions",
        imageSRC:require('D:/React Projects/RD Mart Website/src/images/mock3.jpg'),
        lotteryDrawDays:"MON - SAT",
        lotteryDrawBreaks:["9:45 PM"],
        lotteryDrawTimes:["10:12 PM"]
    },{
        lotteryName: "Powerball",
        imageSRC:require('D:/React Projects/RD Mart Website/src/images/mock1.jpg'),
        lotteryDrawDays:"MON | WED | SAT",
        lotteryDrawBreaks:["9:00 PM"],
        lotteryDrawTimes:["10:12 PM"] 
    },{
        lotteryName:"Texas Lotto",
        imageSRC:require('D:/React Projects/RD Mart Website/src/images/mock2.jpg'),
        lotteryDrawDays:"MON - SAT",
        lotteryDrawBreaks:["10:02 PM"],
        lotteryDrawTimes:["10:12 PM"] 
    }];
    return(
        <div className="LotterySchedule">
            {lotteryList.map((lottery,index)=>(
            <div className="LotteryGridWrapper">
                    <img key={index} src={lottery.imageSRC} alt={`${index+1}`}/>
                <div className="LotteryTextWrapper">
                    <h1>{lottery.lotteryDrawDays}</h1>
                    <div className="LotteryBreaksAndTimes">
                        
                        <div className="LotteryBreaks">
                            <h3>Draw Breaks Start</h3>
                                {lottery.lotteryDrawBreaks.length===1?(
                                    <h2 style={{textAlign:"center"}}>{lottery.lotteryDrawBreaks[0]}</h2>
                                ):(<div className="Breaks">
                                    {lottery.lotteryDrawBreaks.map((item,index)=>(
                                        <h2 key={index}>{item}</h2>
                                    ))}
                                    </div>
                                )}
                        </div>
                        
                        <div className="LotteryDraws">
                            <h3>Draw Times</h3>
                            {lottery.lotteryDrawTimes.length===1?(
                                    <h2 style={{textAlign:"center"}}>{lottery.lotteryDrawTimes[0]}</h2>
                                ):(<div className="Draws">
                                    {lottery.lotteryDrawTimes.map(item=>(
                                        <h2 key={index}>{item}</h2>
                                    ))}
                                    </div>
                                )}
                            
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    );
}
export default LotterySchedule;