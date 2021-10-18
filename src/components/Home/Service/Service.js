import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    console.log(props.service)
    const {title, img,desc} = props.service;
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
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            </Col>
        </div>
    );
};

export default Service;