import React from 'react';
import NavBar from '../Shared/NavBar';
import LotterySchedule from './LotterySchedule';
import Footer from '../Shared/Footer';

const Lottery = () => {
    return(
        <div className="Lottery">
            <NavBar/>
            <LotterySchedule/>
            <Footer/>
        </div>
    )
}

export default Lottery;