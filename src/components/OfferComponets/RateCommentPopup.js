import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/Form";

function RateComment() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <Button className="commentbtn" onClick={() => setLgShow(true)} disabled>Rate and Comment</Button>
      <Modal
        size="lg"
        className="adminForm commentForm"
        show={lgShow}
        onHide={() => setLgShow(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Rate and Comment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Describe your experience</Form.Label>
            <Form.Control as="textarea" rows={3} />
            <span className="form-note text-right">300 words</span>
          </Form.Group>
            <Form.Group className="text-center mb-3">
            <Button className="submit-btn" variant="primary" type="submit">
              Submit
            </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default RateComment;
