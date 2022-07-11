import React, { memo } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CreateDevice: React.FC<{ show: boolean; onHide: () => void }> = ({
  show,
  onHide,
}) => {
  return (
    <Modal size="lg" show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add new Device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder="Enter type's name" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant="outline-danger">
          Close
        </Button>
        <Button onClick={onHide} variant="outline-success">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default memo(CreateDevice);
