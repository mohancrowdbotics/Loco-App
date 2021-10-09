import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../images/logo.png';
import LogoutButton from '../components/LogoutButton';
import LoginButton from '../components/login/LoginButton';
import RegisterButton from '../components/register/RegisterButton';
import DashboardButton from '../components/DashboardButton';
import UserService from '../service/user-service';
import Content from '../components/content/Content';
import Footer from '../components/layout/Footer';

const { getPublicContent } = UserService;

const Home = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const [content, setContent] = useState(null);

  useEffect(() => {
    getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const cont =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(cont);
      }
    );
    // .catch((err) => Promise.reject(err));
  }, []);

  return (
    <>
      <div className="header">
        <Navbar collapseOnSelect expand="lg" className="navigation-main fix-navigation" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Item><Nav.Link href="#home">HOME</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#pricing">Become a Seller</Nav.Link></Nav.Item>
                <Nav.Item>
                  <div className="button-wrapper">
                    {isAuth ? (
                      <>
                        <LogoutButton />
                        <DashboardButton />
                      </>
                    ) : (
                      <>
                        <LoginButton />
                        <RegisterButton />
                      </>
                    )}
                  </div>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="home-inner-cntnt">
          <Content content={content} />
      </div>
      <div className="footerwrapper">
      <Footer />
      </div>
    </>
  );
};

export default Home;
