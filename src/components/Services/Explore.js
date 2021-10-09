import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Martinique from '../../images/Martinique.png';
import dazzling from '../../images/dazzling.png';
import les from '../../images/les.png';
import Star from '../../images/Star.svg';

const ExploreBlock = () => (
  <div className="services-box-wrapper">
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Card.Link href="#" className="service-bloc-div">
            <Card.Img variant="top" src={Martinique} />
            <Card.Body>
              <Card.Title className="title" href="#">About Martinique</Card.Title>
              <Card.Text className="name">
                Robbie Lawrence
              </Card.Text>
              <Card.Text className="location">
                Maritique, Caribbean
              </Card.Text>
              <ListGroup className="price-rating-flex">
                <ListGroup.Item className="price">$35.90</ListGroup.Item>
                <ListGroup.Item className="rating">
                    <span className="rating-icon"><img src={Star} alt="Star" /></span>
                    <span className="rating-value">(3.9)</span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card.Link>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Card.Link href="#" className="service-bloc-div">
            <Card.Img variant="top" src={dazzling} />
            <Card.Body>
              <Card.Title className="title" href="#">Dazzling and dizzying, a city of superlatives</Card.Title>
              <Card.Text className="name">
                Christine Sarkis
              </Card.Text>
              <Card.Text className="location">
                Dubai
              </Card.Text>
              <ListGroup className="price-rating-flex">
                <ListGroup.Item className="price">$158.00</ListGroup.Item>
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
            <Card.Img variant="top" src={les} />
            <Card.Body>
              <Card.Title className="title" href="#">Les Plaisirs Gourmands</Card.Title>
              <Card.Text className="name">
                Colleen Stinchcombe
              </Card.Text>
              <Card.Text className="location">
                California, CA
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
export default ExploreBlock;
