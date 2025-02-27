import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import './App.css'; // Để sử dụng các lớp CSS tùy chỉnh

const validateInput = (value) => {
  return value.length >= 5; // Kiểm tra nếu giá trị có ít nhất 5 ký tự
};

function ValidatedInput() {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const isValidInput = validateInput(value);
    setIsValid(isValidInput);
    setErrorMessage(isValidInput ? "" : "Giá trị phải có ít nhất 5 ký tự!");
  }, [value]);

  return (
    <Form>
      <Form.Group controlId="validatedInput">
        <Form.Label>Nhập một giá trị</Form.Label>
        <Form.Control
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isValid={isValid}
          isInvalid={!isValid}
        />
        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!isValid}>
        Gửi
      </Button>
    </Form>
  );
}

export default ValidatedInput;
