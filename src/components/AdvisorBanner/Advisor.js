import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Advisorimg from '../../images/advisor-bg.png';

const AdvisorBanner = () => (
  <div className="advisor-img-wrapper">
      <Container>
          <div className="position-relative">
            <div className="advisor-img">
              <img src={Advisorimg} alt="Advisor" />
            </div>
            <div className="advisor-center-cntn">
                <h2>Become an advisor</h2>
                <Button className="btn-design" href="#">Become an Advisor</Button>
            </div>
          </div>
        </Container>
  </div>
);
export default AdvisorBanner;
