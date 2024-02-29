import React, { useEffect, useState } from 'react';
import NavBar from "../Shared/NavBar";
import EmailPhone from "./EmailPhone";
import ReviewUs from "./ReviewUs";
import FollowUs from "./FollowUs";
import Footer from "../Shared/Footer";
import 'D:/React Projects/RD Mart Website/src/CSS/Contact.css';

const Contact = () => {
    const [contentMinHeight, setContentMinHeight] = useState(0);

    useEffect(() => {
        const height =300.5;
        setContentMinHeight(`calc(100vh - ${height}px)`);
    }, []);

    console.log(contentMinHeight);

    return (
        <div className="Contact">
            <NavBar />
            <div className="Grid" style={{ minHeight: contentMinHeight }}>
                <EmailPhone />
                <ReviewUs />
                <FollowUs />
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
