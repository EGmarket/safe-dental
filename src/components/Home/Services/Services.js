import React, { useEffect, useState } from "react";
import {  Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('./fullservice.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

  return (
    <div>
      <div className="container mt-3">
        <div className="row mx-5">
          <div className="col-md-8 mt-4">
            <div>
              <h4 className="text-primary fs-4 mt-4">Comitted To</h4>
              <h2 className="text-success fs-1 fw-bold">Excellence</h2>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <button type="button" class="btn btn-info fw-bold text-white fs-3">
              Exclusive Services
            </button>
          </div>
        </div>
        <Row xs={1} md={4} lg={4}>
        {
            services.map(service => <Service
            
              key = {service.key}
              service = {service}
            >

            </Service>)
          }
        </Row>

        </div>
      </div>
    
  );
};

export default Services;
