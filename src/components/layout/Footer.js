import React from 'react';
import { Link } from 'react-router-dom';
import Twitter from '../../images/twitter.svg';
import Instagram from '../../images/Instagram.svg';
import Facebook from '../../images/facebook.svg';
import linkedin from '../../images/linkedin.svg';

const Footer = () => (
  <footer>
      <div className="footerflex">
          <div className="footer-left-column">
              <p className="copyright-text">&copy; 2021. LOCO, Inc.</p>
              <ul className="footer-nav-links">
               <li><Link to="/Home" >About us</Link></li>
               <li><Link to="/Home" >Contact us</Link></li>
              </ul>
          </div>
          <div className="footer-right-column">
            <ul className="footer-Slinks">
               <li><Link to="/Home" ><img src={Twitter} alt="Twitter" /></Link></li>
               <li><Link to="/Home" ><img src={Instagram} alt="Instagram" /></Link></li>
               <li><Link to="/Home" ><img src={Facebook} alt="Facebook" /></Link></li>
               <li><Link to="/Home" ><img src={linkedin} alt="linkedin" /></Link></li>
            </ul>
          </div>
      </div>
  </footer>
);
export default Footer;
