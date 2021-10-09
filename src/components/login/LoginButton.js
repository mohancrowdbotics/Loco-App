import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import ResetPassword from '../ResetPassword/ResetPasword';

function LoginButton() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Button className="loginbtn" onClick={() => setLgShow(true)}>Login</Button>
      <Modal
        size="lg"
        className="adminForm loginForm"
        show={lgShow}
        onHide={() => setLgShow(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Welcome back!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4 input-design" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-2 input-design" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-5 flex-links" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
              <ResetPassword />
            </Form.Group>
            <Form.Group className="text-center mb-3">
            <Button className="submit-btn" variant="primary" type="submit">
              login
            </Button>
            </Form.Group>
            <p className="text-center form-btm-text">Don’t have an account? <Link className="signup-text" to="/register">Sign Up</Link></p>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default LoginButton;
