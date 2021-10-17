import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Forms from "../../Common/Form/Forms";

const Teams = () => {
  return (
    <div>
      <div className="container mt-5">
        <div>
          <div className="row">
            <div className="book-now-container mt-5">
              <h1 className="book-now text-center mt-5 fw-bold">BOOK NOW</h1>
            </div>
          </div>
          <div className="row">
              <div >
              <CardGroup className="book-now">
              <Card className="shadow mx-1">
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
              </Card >
              <Card className="shadow mx-1">
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
              <Card className="shadow mx-1">
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
              <Card className="shadow mx-1">
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
      </div>
    </div>
  );
};

export default Teams;
