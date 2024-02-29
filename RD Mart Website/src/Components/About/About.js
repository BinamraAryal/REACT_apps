import React from 'react';
import Banner from '../Shared/Banner';
import NavBar from '../Shared/NavBar';
import Introduction from './Introduction';
import ImageTextGrid from './ImageTextGrid';
import Footer from '../Shared/Footer';
import 'D:/React Projects/RD Mart Website/src/CSS/About.css';
const About = () =>{
    return(
        <div className="About">
                <NavBar/>
                <Banner type="about"/>
                <Introduction/>
                <ImageTextGrid/>
                <Footer/>
        </div>
    )
}
export default About;