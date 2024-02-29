import React from 'react';
import 'D:/React Projects/RD Mart Website/src/CSS/OpenHours.css';
const OpenHours = () =>{
    const storeHours = [
        {day:"Monaday", hours:"06:00 AM - 10:00 PM"},
        {day:"Tuesday", hours:"06:00 AM - 10:00 PM"},
        {day:"Wednesday", hours:"06:00 AM - 10:00 PM"},
        {day:"Thursday", hours:"06:00 AM - 10:00 PM"},
        {day:"Friday", hours:"06:00 AM - 10:00 PM"},
        {day:"Saturday", hours:"06:00 AM - 10:00 PM"},
        {day:"Sunday", hours:"06:00 AM - 10:00 PM"}];
    
    return(
    <div className="OpenHours">
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Hours</th>
                </tr>
            </thead>
            <tbody>
                {storeHours.map((time, index)=>(
                    <tr key = {index}>
                        <td className="Day">{time.day}</td>
                        <td className="Hours">{time.hours}</td>
                    </tr>
                )

                )}
            </tbody>
        </table>
    </div>
    );
}

export default OpenHours;