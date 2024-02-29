import React from 'react';
import 'D:/React Projects/RD Mart Website/src/CSS/Services.css';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';
import ServiceGrid from './ServiceGrid';
const Services = () =>{
    return (
        <div className = "Services">
            <NavBar/>
            <ServiceGrid/>
            <Footer/>
        </div>
    )
}
export default Services;