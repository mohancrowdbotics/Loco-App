import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import RateComment from './RateCommentPopup';
import star from "../../images/Star-rating.svg";
import jane from "../../images/jane.png";

const Review = () => (
<div className="review-list-design">
    <div className="review-flex-container">
         <p className="paragraph-text regular mb-0">Reviews <span className="review-numbers">(58)</span></p>
         <div className="trip-rating-value">
              <Image src={star} alt="Star" />
              <span className="rating-value">(4.2)</span>
        </div>
    </div>
    <div className="lines-design">
            <Row>
              <Col xl={6}>
                <div className="gedient-lines" />
              </Col>
              <Col xl={4}>
                <div className="gedient-lines" />
              </Col>
              <Col xl={2}>
                <div className="gedient-lines" />
              </Col>
            </Row>
    </div>
    <div className="rating-list-design">
        <Row className="align-items-center">
              <Col xl={4} lg={4} md={12}>
              <div className="profile-div">
              <div className="profile-img"><Image src={jane} alt="Profile" /></div>
              <div className="profile-details">
               <span className="profile-name">Cleo McCoy</span>
               <span className="profile-light-text">August 2021</span>
             </div>
             </div>
              </Col>
              <Col xl={8} lg={8} md={12}>
              <div className="rating-white-box">
                  <p className="mb-0">Amazing experience. The guides are super friendly and informative. Highly highly recommend!</p>
              </div>
              </Col>
        </Row>
        <Row className="align-items-center">
              <Col xl={4} lg={4} md={12}>
              <div className="profile-div">
              <div className="profile-img"><Image src={jane} alt="Profile" /></div>
              <div className="profile-details">
               <span className="profile-name">Cleo McCoy</span>
               <span className="profile-light-text">August 2021</span>
             </div>
             </div>
              </Col>
              <Col xl={8} lg={8} md={12}>
              <div className="rating-white-box">
                  <p className="mb-0">Amazing experience. The guides are super friendly and informative. Highly highly recommend!</p>
              </div>
              </Col>
        </Row>
        <Row className="align-items-center">
              <Col xl={4} lg={4} md={12}>
              <div className="profile-div">
              <div className="profile-img"><Image src={jane} alt="Profile" /></div>
              <div className="profile-details">
               <span className="profile-name">Cleo McCoy</span>
               <span className="profile-light-text">August 2021</span>
             </div>
             </div>
              </Col>
              <Col xl={8} lg={8} md={12}>
              <div className="rating-white-box">
                  <p className="mb-0">Amazing experience. The guides are super friendly and informative. Highly highly recommend!</p>
              </div>
              </Col>
        </Row> 
    </div>
    <div className="offer-short-btn">
       <Link className="gredient-bordered-btn" to="/home">Show All Reviews</Link>
    </div>
    <div className="text-center rate-comment-sec">
        <RateComment />
    </div>
</div>
);
export default Review;
