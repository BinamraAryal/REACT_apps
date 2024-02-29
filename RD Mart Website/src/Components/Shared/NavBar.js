import React,{useState, useEffect} from 'react';
import 'D:/React Projects/RD Mart Website/src/CSS/NavBar.css';
import {Link, useLocation} from 'react-router-dom';
const NavBar = () =>{

    const location = useLocation();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const logoSrc = require('D:/React Projects/RD Mart Website/src/images/RD Mart-logos.jpeg');
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
        console.log("Button Clicked");
    };

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const getCurrentPageName = () => {
        const path = location.pathname;
        switch (path) {
            case '/Services':
                return 'Services';
            case '/Contact':
                return 'Contact';
            default:
                return 'Home';
        }
    };

    return(
        <div className="NavBar">
            <div className="LogoNavBar">
                <Link to='/'><img src={logoSrc}/></Link>
                <div className="LogoTextContainer">
                <p>{getCurrentPageName()}</p>
                </div>
            </div>
            
                {windowWidth <= 850 ? (
                <nav>
                <div className={`NavBarMenu ${isOpen ? 'active':''}`}>
                <ul className="NavBarItems">
                    <li className='NavBarItem'><Link to="/">Home</Link></li>
                    <li className='NavBarItem'><Link to="/Services">Services</Link></li>
                    <li className='NavBarItem'><Link to="/Contact">Contact</Link></li>
                </ul>
                </div>
                <div className="NavBarToggle" onClick={toggleNavBar}>
                <div className={`HamburgerIcon ${isOpen ? 'open' : ''}`}>
                    <div className="Line"></div>
                    <div className="Line"></div>
                    <div className="Line"></div>
                </div>
                </div>
            </nav>
                ):(
                <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
                )}
        </div>
       
    );
}
export default NavBar;