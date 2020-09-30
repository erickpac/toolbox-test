import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

import '../styles/AddWord.css';

const AddWord = ({ addNewWord }) => {
  const [word, setWord] = useState('');

  const handleChangeText = (event) => {
    event.preventDefault();
    setWord(event.target.value);
  };

  const handleSubmitCall = (event) => {
    event.preventDefault();
    addNewWord(word);
  };

  return (
    <Form className="form-add" onSubmit={handleSubmitCall}>
      <Form.Group controlId="formAddWord">
        <Form.Label>Nueva Palabra</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa una palabra"
          onChange={handleChangeText}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
      >
        Enviar
      </Button>
    </Form>
  );
};

AddWord.propTypes = {
  addNewWord: PropTypes.func.isRequired,
};

export default AddWord;
