import { Button, Card, CardGroup, Col } from 'react-bootstrap';

const HomeService = (props) => {
  const {title, img,desc} = props.service;
    return (
        <div>
            <Col>
            <Card className="mx-2 shadow service">
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {desc}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button className="mx-5 btn-lg">Details</Button>
              </Card.Footer>
            </Card>
            </Col>
      </div>
        
    );
};

export default HomeService;