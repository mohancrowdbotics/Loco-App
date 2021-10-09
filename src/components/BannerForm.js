import React from 'react';
import location from '../images/MapPin.svg';

const BannerForm = () => (
  <div className="home-banner-form">
    <div className="banner-form">
      <div className="bannerform-heading">
        <h2>Connect With A Local Expert And Travel With Ease</h2>
      </div>
      <form className="BannerForm">
        <div className="form-grouph position-relative input-design">
          <input 
          type="text"
          placeholder="Where are you going?"
          />
          <span className="location-icon abs-icon">
            <img src={location} alt="Location icon" />
          </span>
        </div>
      </form>
    </div>
  </div>
);
export default BannerForm;
