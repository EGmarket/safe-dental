import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Specialized from '../Specialized/Specialized';
import Teams from '../Teams/Teams';
import HomeServices from '../HomeServices/HomeServices';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Specialized></Specialized>
            <Teams></Teams>
        </div>
    );
};

export default Home;