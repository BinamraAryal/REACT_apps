import React from 'react';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import 'D:/React Projects/RD Mart Website/src/CSS/Footer.css';

const Footer = () => {
    const location = useLocation();
    const displaySymbolPaths = ['/', '/Services'];
    const showContactSymbol = displaySymbolPaths.includes(location.pathname);

    return (
        <footer className="Footer">
            <p>Copyright RDMart 2024.</p>
            {showContactSymbol && <span><Link to='/Contact' className="Link"><p>Contact</p></Link><img src={require('D:/React Projects/RD Mart Website/src/images/contact-mail.png')}/></span>}
        </footer>
    );
};

export default Footer;
