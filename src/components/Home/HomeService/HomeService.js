import { Button, Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeService = (props) => {
  const {title, img,desc,key} = props.service;
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
                <Link to={`/service/${key}`}>
                  <Button className="mx-5 btn-lg">Details</Button>
                </Link>
                
              </Card.Footer>
            </Card>
            </Col>
      </div>
        
    );
};

export default HomeService;