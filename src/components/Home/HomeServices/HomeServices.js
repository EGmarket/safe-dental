import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeService from "../HomeService/HomeService";

const HomeServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./fullservice.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

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
            <Link to="/services">
              <button
                type="button"
                class="btn btn-info fw-bold text-white fs-3">
                See More Services
              </button>
            </Link>
          </div>
        </div>
        <Row xs={1} md={4} lg={4}>
          {services.slice(0, 4).map((service) => (
            <HomeService key={service.key} service={service}></HomeService>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomeServices;
