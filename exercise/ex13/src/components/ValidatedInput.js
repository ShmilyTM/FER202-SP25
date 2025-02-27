import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const ValidatedInput = ({ validationFunction, errorMessage }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicInput">
          <Form.Label>Enter some text</Form.Label>
          <Form.Control
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            isInvalid={!isValid}
          />
          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!isValid}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ValidatedInput;
