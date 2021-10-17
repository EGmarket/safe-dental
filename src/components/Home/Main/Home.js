import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Specialized from '../Specialized/Specialized';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Specialized></Specialized>
            <Teams></Teams>
        </div>
    );
};

export default Home;