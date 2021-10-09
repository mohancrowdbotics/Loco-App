import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';

function ResetPassword() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Button className="resetbtn" onClick={() => setLgShow(true)}>Forgot Password?</Button>
      <Modal
        size="lg"
        className="adminForm resetForm"
        show={lgShow}
        onHide={() => setLgShow(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
             Reset Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="subheading-text text-center">Please enter your email address and we Will send you a link to reset your password.</p>
          <Form>
            <Form.Group className="mb-4 input-design" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-4 input-design" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-4 input-design" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Confirm New Password" />
            </Form.Group>
            <Form.Group className="text-center mb-4">
            <Button className="submit-btn" variant="primary" type="submit">
              Submit
            </Button>
            </Form.Group>
            <p className="text-center form-btm-text"><Link className="signup-text" to="/register">Back To Login</Link></p>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ResetPassword;
