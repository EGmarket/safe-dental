import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Specialized from '../Specialized/Specialized';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Specialized></Specialized>
        </div>
    );
};

export default Home;