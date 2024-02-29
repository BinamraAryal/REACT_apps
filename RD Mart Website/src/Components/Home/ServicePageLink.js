import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import 'D:/React Projects/RD Mart Website/src/CSS/ServicePageLink.css';

const ServicePageLink = () =>{
    return(
        <div className="ServicePageLink">
            <p><Link to="/Services" className="Link">Click here</Link> to see what more we have to offer.</p>
        </div>
    )
}
export default ServicePageLink;