import React, { useEffect, useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    console.log(props.service)
    const {title, img,desc,key} = props.service;
    return (
        <div>
            <Col>
            <Card className="mx-1 shadow service mb-3">
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {desc}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <Link to={`/service/${key}`}>
                  <Button className="mx-5 btn-lg">Details</Button>
                </Link>
              </Card.Footer>
            </Card>
            </Col>
        </div>
    );
};

export default Service;