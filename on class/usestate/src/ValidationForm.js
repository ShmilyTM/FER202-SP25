import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8;
};

function ValidationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  useEffect(() => {
    setIsEmailValid(validateEmail(email));
  }, [email]);

  useEffect(() => {
    setIsPasswordValid(validatePassword(password));
  }, [password]);

  return (
    <Form>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isValid={isEmailValid}
          isInvalid={!isEmailValid}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isValid={isPasswordValid}
          isInvalid={!isPasswordValid}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isEmailValid || !isPasswordValid}>
        Submit
      </Button>
    </Form>
  );
}

export default ValidationForm;
