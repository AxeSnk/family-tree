import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

type TAddModal = {
  show: boolean;
  onHide: () => void;
  onSubmit: (name: string) => void;
};

const AddModal: React.FC<TAddModal> = ({ show, onHide, onSubmit }) => {
  const [name, setName] = useState('');

  const handleHide = () => {
    setName('');
    onHide();
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setName(ev.target.value);
  };

  const handleSubmit = () => {
    setName('');
    onSubmit(name);
  };

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handleHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить родственника
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              placeholder="Имя"
              value={name}
              onChange={handleChange}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleHide}>Close</Button>
        <Button
          type="button"
          disabled={!name}
          variant="success"
          onClick={handleSubmit}
        >
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
