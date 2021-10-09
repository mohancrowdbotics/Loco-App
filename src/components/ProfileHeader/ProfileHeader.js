import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import './Profile.css';
import Logo from '../../images/loco-colored-logo.png';
import ProfileImg from '../../images/profile.png';

const ProfileHeader = () => (
<Navbar collapseOnSelect expand="lg" fixed="top" className="profileHeader" >
  <Container>
  <Navbar.Brand>
    <Link to="/home"><Image src={Logo} alt="logo" /></Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    <Nav className="align-items-center">
      <Nav.Link href="#deets">Become a Travel Guru</Nav.Link>
      <Nav.Link>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-profile">
           <span className="profile-img"> <Image src={ProfileImg} alt="profile" /></span>
           <span className="profile-name">Darrell Steward</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
);
export default ProfileHeader;