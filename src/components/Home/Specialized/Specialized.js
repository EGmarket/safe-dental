import React from "react";
import { Card, Button } from "react-bootstrap";

const Specialized = () => {
  return (
    <div>
      <div className="container mt-5 text-center">
        <div className="row">
          <h5>DentalCare</h5>
          <h1>Specialized Doctor</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="mt-3 mx-5">
              <Card style={{ width: "400px" }}>
                <Card.Img variant="top" height="400px" src="https://i.imgur.com/1MqLs1a.jpg" />
                <Card.Body className="best-bg">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Are You Nervous?</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-md-8 mt-5 responsive-img">
            <img
              width="100%"
              src="https://i.imgur.com/be2Y6SW.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialized;
