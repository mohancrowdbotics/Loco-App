import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import LaDream from '../../images/la.png';
import Animal from '../../images/animal.png';
import Topanga from '../../images/topanga.png';
import Star from "../../images/Star-rating.svg";

const SimilerService = () => (
  <div className="services-box-wrapper">
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Card.Link href="#" className="service-bloc-div">
            <Card.Img variant="top" src={LaDream} />
            <Card.Body>
              <Card.Title className="title" href="#">LA/Malibu Dream <span className="display-block">Hike Ecotour</span></Card.Title>
              <Card.Text className="name">
                Robbie Lawrence
              </Card.Text>
              <Card.Text className="location">
                Malibu, United States
              </Card.Text>
              <ListGroup className="price-rating-flex">
                <ListGroup.Item className="price">$120.00</ListGroup.Item>
                <ListGroup.Item className="rating">
                    <span className="rating-icon"><img src={Star} alt="Star" /></span>
                    <span className="rating-value">(3.7)</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card.Link>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card.Link href="#" className="service-bloc-div">
            <Card.Img variant="top" src={Animal} />
            <Card.Body>
              <Card.Title className="title" href="#">Animal experience <span className="display-block">by Cleo</span></Card.Title>
              <Card.Text className="name">
                Christine Sarkis
              </Card.Text>
              <Card.Text className="location">
                Malibu, United States
              </Card.Text>
              <ListGroup className="price-rating-flex">
                <ListGroup.Item className="price">$59.00</ListGroup.Item>
                <ListGroup.Item className="rating">
                    <span className="rating-icon"><img src={Star} alt="Star" /></span>
                    <span className="rating-value">(4.8)</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card.Link>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card.Link href="#" className="service-bloc-div">
            <Card.Img variant="top" src={Topanga} />
            <Card.Body>
              <Card.Title className="title" href="#">Topanga Labyrinth <span className="display-block">Full Moon Ceremony</span></Card.Title>
              <Card.Text className="name">
              Colleen Stinchcombe
              </Card.Text>
              <Card.Text className="location">
                 Topanga, United States
              </Card.Text>
              <ListGroup className="price-rating-flex">
                <ListGroup.Item className="price">$70.00</ListGroup.Item>
                <ListGroup.Item className="rating">
                    <span className="rating-icon"><img src={Star} alt="Star" /></span>
                    <span className="rating-value">(4.0)</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card.Link>
        </Col>
      </Row>
    </Container>
  </div>
);
export default SimilerService;
