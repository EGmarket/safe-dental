import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Services = () => {
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
        <div className="row">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="https://i.imgur.com/1HoG69j.png" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://i.imgur.com/ZdAbwfE.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://i.imgur.com/41xOPOP.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};

export default Services;
