import React from "react";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import star from "../../images/Star-rating.svg";
import PachageLocation from "../../images/gallery-img.png";

const OfferSideBar = () => (
<div className="offer-white-box">
    <h6 className="package-name">Two Week Ultimate Euro Trip </h6>
    <p className="trip-scale">Full-scale trip</p>
    <div className="trip-rating-div flex justify-content-bw align-items-center">
        <div className="trip-location"><p className="mb-0">Europe</p></div>
        <div className="trip-rating">
          <Image src={star} alt="Star" />
          <span className="rating-value">(4.2)</span>
        </div>
    </div>
    <div className="trip-img">
          <Image src={PachageLocation} alt="Trip" />
    </div>
    <div className="pricing-details">
         <h5 className="pricing-details-heading">Price details</h5>
         <div className="flex justify-content-bw">
             <p className="trip-pricing-total mb-0">Total (USD)</p>
             <p className="price mb-0">$116.00</p>
         </div>
    </div>
    <div className="offer-btns">
         <Link className="green-btn mb-3" to="/home">Continue</Link>
         <Link className="gredient-bordered-btn" to="/home">Message</Link>
    </div>
</div>
);
export default OfferSideBar;
