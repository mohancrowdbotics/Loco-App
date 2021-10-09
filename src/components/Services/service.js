import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Serviceimg from '../../images/service.png';
import Star from '../../images/Star.svg';
import Serviceimg2 from '../../images/service2.png';
import Serviceimg3 from '../../images/service3.png';
import Serviceimg4 from '../../images/service4.png';
import Serviceimg5 from '../../images/service5.png';
import Serviceimg6 from '../../images/service6.png';

const ServiceBlocks = () => (
  <div className="services-box-wrapper">
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Link to="/offer" className="service-bloc-div">
            <Card.Img variant="top" src={Serviceimg} />
            <Card.Body>
              <Card.Title className="title" href="#">Its Time for a Summer Road Trip</Card.Title>
              <Card.Text className="name">
                Robbie Lawrence
              </Card.Text>
              <Card.Text className="location">
                Hyperion, LA
              </Card.Text>
              <ListGroup className="price-rating-flex">
                <ListGroup.Item className="price">$35.90 </ListGroup.Item>
                <ListGroup.Item className="rating">
                    <span className="rating-icon"><img src={Star} alt="Star" /></span>
                    <span className="rating-value">(4.9)</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Link>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card.Link href="#" className="service-bloc-div">
            <Card.Img variant="top" src={Serviceimg2} />
            <Card.Body>
              <Card.Title className="title" href="#">Why Food Trucks Are the Secret to Eating Well on Oahu</Card.Title>
              <Card.Text className="name">
                Christine Sarkis
              </Card.Text>
              <Card.Text className="location">
                Oahu, Hawaii
              </Card.Text>
              <ListGroup className="price-rating-flex">
                <ListGroup.Item className="price">$08.00</ListGroup.Item>
                <ListGroup.Item className="rating">
                    <span className="rating-icon"><img src={Star} alt="Star" /></span>
                    <span className="rating-value">(4.6)</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card.Link>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card.Link href="#" className="service-bloc-div">
            <Card.Img variant="top" src={Serviceimg3} />
            <Card.Body>
              <Card.Title className="title" href="#">Private Horseback Ride in Malibu</Card.Title>
              <Card.Text className="name">
                Colleen Stinchcombe
              </Card.Text>
              <Card.Text className="location">
                Malibu, United States
              </Card.Text>
              <ListGroup className="price-rating-flex">
                <ListGroup.Item className="price">$15.00</ListGroup.Item>
                <ListGroup.Item className="rating">
                    <span className="rating-icon"><img src={Star} alt="Star" /></span>
                    <span className="rating-value">(4.2)</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card.Link>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card.Link href="#" className="service-bloc-div">
            <Card.Img variant="top" src={Serviceimg4} />
            <Card.Body>
              <Card.Title className="title" href="#">A popular resort destination thats still true to its roots</Card.Title>
              <Card.Text className="name">
                Robbie Lawrence
              </Card.Text>
              <Card.Text className="location">
                Hyperion, LA
              </Card.Text>
              <ListGroup className="price-rating-flex">
                <ListGroup.Item className="price">$35.90 </ListGroup.Item>
                <ListGroup.Item className="rating">
                    <span className="rating-icon"><img src={Star} alt="Star" /></span>
                    <span className="rating-value">(4.7)</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card.Link>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card.Link href="#" className="service-bloc-div">
            <Card.Img variant="top" src={Serviceimg5} />
            <Card.Body>
              <Card.Title className="title" href="#">Private horse back ride in Malibu</Card.Title>
              <Card.Text className="name">
                Christine Sarkis
              </Card.Text>
              <Card.Text className="location">
                Malibu, United States
              </Card.Text>
              <ListGroup className="price-rating-flex">
                <ListGroup.Item className="price">$58.00</ListGroup.Item>
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
            <Card.Img variant="top" src={Serviceimg6} />
            <Card.Body>
              <Card.Title className="title" href="#">New York City Food Tour</Card.Title>
              <Card.Text className="name">
                Colleen Stinchcombe
              </Card.Text>
              <Card.Text className="location">
                New York, NY
              </Card.Text>
              <ListGroup className="price-rating-flex">
                <ListGroup.Item className="price">$12.00</ListGroup.Item>
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
export default ServiceBlocks;
