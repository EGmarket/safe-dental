import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const TeamDetails = () => {
    const {memberId } = useParams();
    const [memberDetails,setMemberDetails] = useState([])
    const [details, setDetails] = useState([])

    useEffect(()=>{
        fetch('/team.json')
        .then(res => res.json())
        .then(data => setMemberDetails(data))
    },[]);

    useEffect(()=>{
        const details = memberDetails.find(member => member.key === memberId)
        console.log(details)
        setDetails(details)
    },[memberDetails]);

    return (
        <div>
            <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img src={details?.img} alt="" srcset="" />
                    
                </div>
                <div className="col-md-6 mt-5">
                    <h2 className="fw-bold text-primary">Doctor_Name: {details?.doctors}</h2>
                    <h2>Name Of Service: {details?.title}</h2>
                    <h3>ServiceFee: {details?.Fee}</h3>
                    <h4>TimePreiod: {details?.duration}</h4>
                    <p>{details?.desc}</p>
                    <h4>visiting_time: {details?.visiting_time}</h4>
                    <Link to="/">
                        <Button className="btn btn-danger">Book Service</Button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TeamDetails;