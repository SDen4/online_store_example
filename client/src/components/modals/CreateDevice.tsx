import React, { memo, useContext } from 'react';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { Context } from '../..';

const CreateDevice: React.FC<{ show: boolean; onHide: () => void }> = ({
  show,
  onHide,
}) => {
  // @ts-ignore
  const { device } = useContext(Context);

  return (
    <Modal size="lg" show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add new Device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="m-2">
            <Dropdown.Toggle>Chose Type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((el: any) => (
                <Dropdown.Item key={el.id}>{el.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="m-2">
            <Dropdown.Toggle>Chose Brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((el: any) => (
                <Dropdown.Item key={el.id}>{el.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control className="m-2" placeholder="Enter the model name" />

          <Form.Control
            className="m-2"
            type="number"
            placeholder="Enter the price"
          />

          <Form.Control className="m-2" type="file" placeholder="Add picture" />

          <hr />
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
