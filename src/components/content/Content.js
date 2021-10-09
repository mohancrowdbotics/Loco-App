import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SecondNav from '../SecondNav/SecondNav';
import BannerForm from '../BannerForm';
import ServiceBlocks from '../Services/service';
import ExploreBlock from '../Services/Explore';
import AdvisorBanner from '../AdvisorBanner/Advisor';
import slide1 from '../../images/slide-1.png';
import slide2 from '../../images/slide-2.png';
import slide3 from '../../images/slide-3.png';
import slide4 from '../../images/slide-4.png';
import slide5 from '../../images/slide-5.png';

const Maincontent = () => (
<div className="home-slider">
  <Carousel fade>
    <Carousel.Item interval={1000}>
      <img src={slide1} alt="Slider" />
      <Carousel.Caption>
        <BannerForm />
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img src={slide2} alt="Slider" />
      <Carousel.Caption>
        <BannerForm />
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img src={slide3} alt="Slider" />
      <Carousel.Caption>
        <BannerForm />
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img src={slide4} alt="Slider" />
      <Carousel.Caption>
        <BannerForm />
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img src={slide5} alt="Slider" />
      <Carousel.Caption>
        <BannerForm />
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <div className="second-nav-div">
    <SecondNav />
  </div>
  <div className="serivces-bloc-main-wrapper">
    <div className="heading-wrapper">
      <div className="container">
       <h2>Trending Services</h2>
       </div>
    </div>
    <ServiceBlocks />
  </div>
  <div className="advisor-banner-main-wrapper">
  <AdvisorBanner />
  </div>
  <div className="exploremore-main-wrapper">
    <div className="heading-wrapper">
      <div className="container">
       <h2>Explore more</h2>
       </div>
    </div>
    <ExploreBlock />
  </div>
</div>
);
export default Maincontent;
