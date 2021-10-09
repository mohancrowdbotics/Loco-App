import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const SecondNav = () => (
<div className="second-nav-wrapper">
<Navbar className="second-nav">
    <Navbar.Brand><Nav.Link href="#">Full-scale trip planning</Nav.Link></Navbar.Brand>
    <Navbar.Brand><Nav.Link href="#">Day trip planning</Nav.Link></Navbar.Brand>
    <Navbar.Brand><Nav.Link href="#">Entertainment</Nav.Link></Navbar.Brand>
    <Navbar.Brand><Nav.Link href="#">Food</Nav.Link></Navbar.Brand>
    <Navbar.Brand><Nav.Link href="#">hospitality</Nav.Link></Navbar.Brand>
    <Navbar.Brand><Nav.Link href="#">transportation</Nav.Link></Navbar.Brand>
    <Navbar.Brand><Nav.Link href="#">guides</Nav.Link></Navbar.Brand>
    <Navbar.Brand><Nav.Link href="#">other</Nav.Link></Navbar.Brand>
</Navbar>
</div>
);
export default SecondNav;
