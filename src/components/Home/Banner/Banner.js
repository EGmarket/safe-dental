import React from 'react';
import { GiftFilled ,HeartFilled , ThunderboltFilled,CarryOutFilled } from '@ant-design/icons';

const Banner = () => {
    return (
        <header className="header">
            <img  src="https://i.imgur.com/1sEY9gH.jpg" alt="" srcset="" />
            <div className="header-content care-bg rounded shadow">
                <h1 className="fw-bolder we-text">WE CARE</h1>
                <h2 className="fw-bolder about-text">ABOUT YOU <span className="text-white">AND</span></h2>
                <h1 className="fw-bolder smile-text text-white shadow">YOUR SMILE</h1>
            </div>
            <div className="container  header-content-two">
                <div className="row">
                    <div className="col-md-4 bg-danger p-3 text-center text-white">
                        <h3>Experience Best Dental</h3>
                    </div>
                    <div className="col-md-6 d-flex justify-content-between best-bg">
                        <div className="fs-1 mx-5"><HeartFilled /> </div>
                        <div className="fs-1 mx-3 "><CarryOutFilled /></div>
                        <div className="fs-1 mx-3"><GiftFilled /></div>
                        <div className="fs-1 me-5"><ThunderboltFilled /></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;