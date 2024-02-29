import React from 'react';
import 'D:/React Projects/RD Mart Website/src/CSS/EmailPhone.css';
const EmailPhone = () =>{
    const email="abcd@gmail.com";
    const phoneNo="000-000-0000";

    return(
        <div className="EmailPhone">
            <h1>Email Us At: </h1>
            <p>{email}</p>
            <h1>Give us a call at: </h1>
            <p>{phoneNo}</p>  
        </div>
    )
}
export default EmailPhone;