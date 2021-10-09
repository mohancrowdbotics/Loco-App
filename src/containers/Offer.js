import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import SimpleReactLightbox from "simple-react-lightbox";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import SimilerService from "../components/OfferComponets/SimilerServices";
import Gallery from "../components/OfferComponets/GalleryLightbox";
import Review from "../components/OfferComponets/Review";
import OfferSideBar from "../components/OfferComponets/OfferSideBar";
import Footer from '../components/layout/Footer';
import backIcon from "../images/back-icon.svg";
import star from "../images/Star-rating.svg";
import AdvisorProfile from "../images/advisor-profile.svg";

const Offer = () => (
  <div className="offerpage-wrapper">
    <div className="profile-header white-bg-header">
      <ProfileHeader />
    </div>
    <div className="content-padding-top">
    <Container className="container1350">
      <Row>
        <Col xl={9}>
          <div className="offer-details-heading">
            <div className="trip-header position-relative">
              <Link to="/Home">
                <Image src={backIcon} alt="Back Icon" />
              </Link>
              <h2 className="trip-name">Two Week Ultimate Euro Trip</h2>
            </div>
            <p className="trip-scale">Full-scale trip</p>
            <div className="trip-rating-value">
              <Image src={star} alt="Star" />
              <span className="rating-value">(4.2)</span>
              <span className="trip-location">Europe</span>
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
          <div className="gallery-lightBox">
            <React.StrictMode>
              <SimpleReactLightbox>
                <Gallery />
              </SimpleReactLightbox>
            </React.StrictMode>
          </div>
          <div className="about-services">
              <h3 className="page-subheadings">About The Service</h3>
              <p className="paragraph-text">Let me plan the ultimate euro trip for you After years of helping those around me by assisting in planning trips, I realized it was something that I loved helping with. My work will include extensively customized and researched plans to ensure that your destination, timeframe, plans, and budget all provide you the best trip possible. My itineraries will include the below after a personal consultation to understand what you are looking for:</p>
              <ul className="ul-text-design list-unstyled">
                <li>- Accommodation</li>
                <li>- Food/Drink</li>
                <li>- Activities</li>
                <li>- Transportation</li>
              </ul>
          </div>
          <div className="about-advisor">
          <h3 className="page-subheadings">About The Advisor</h3>
          <div className="profile-div">
             <div className="profile-img"><Image src={AdvisorProfile} alt="Profile" /></div>
             <div className="profile-details">
               <span className="profile-name">Cleo McCoy</span>
               <span className="profile-light-text">Advisor since May 2019</span>
             </div>
          </div>
          <p className="paragraph-text">I work for a commercial real estate in Toronto, Cananda.While that is my day job, in my personal life I am a travel/food enthusiast. I have lived abroad multiple times each for months on end traveling across Europe, and Asia, and have taken many other trips within my lifetime. My trips are diverse in nature both creating itinerates under a strict budget, and also creating plans of luxury. Traveling has always been a passion of mine, and I strive to help anybody be able to enjoy the beauty and excitement of it.</p>
          </div>
          <div className="review-sec"><Review /></div>
          <div className="similer-services-sec"> 
          <h3 className="page-subheadings">Similar services</h3>
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
           <div className="similerservices-sec">
              <SimilerService />
              <div className="offer-short-btn">
                <Link className="gredient-bordered-btn" to="/home">
                  Show all
                </Link>
              </div>
           </div>
    </div>
        </Col>
        <Col xl={3}>
          <OfferSideBar />
        </Col>
      </Row>
    </Container>
    </div>
    <div className="footerwrapper">
    <Footer />
    </div>
  </div>
);
export default Offer;
