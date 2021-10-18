import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const ServiceDetail = () => {
    const {serviceId } = useParams();
    const [serviceDetails,setServiceDetails] = useState([])
    const [details, setDetails] = useState([])

    useEffect(()=>{
        fetch('/fullservice.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    },[]);

    useEffect(()=>{
        const details = serviceDetails.find(service => service.key === serviceId)
        console.log(details)
        setDetails(details)
    },[serviceDetails]);

    return (
        <div>
            <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img src={details?.img} alt="" srcset="" />
                </div>
                <div className="col-md-6 mt-5">
                    <h2>Name Of Service: {details?.title}</h2>
                    <h3>ServiceFee: {details?.Fee}</h3>
                    <h4>TimePreiod: {details?.duration}</h4>
                    <p>{details?.desc}</p>
                    <Link to="/">
                        <Button className="btn btn-danger">Book Service</Button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetail;