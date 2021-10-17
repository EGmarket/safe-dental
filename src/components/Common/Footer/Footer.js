import React from 'react';
import "./footer.css";
import logo from '../../Assets/Images/Logo.png'

const Footer = () => {
    return (
        <div>
            <div className="container mt-5 footer-bg">
                <div className="row ">
                    <div className="col-md-4 mt-5">
                        <img src={logo} alt="" />
                    </div>
                    <div className="col-md-4 mt-5 text-center">
                        <h1>Hello</h1>
                    </div>
                    <div className="col-md-4 mt-5 text-center">
                        <h1>Payment</h1>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Footer;