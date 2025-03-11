import React, { useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const MyForm = ({ title, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 3 || formData.name.length > 50) newErrors.name = "Tên phải từ 3-50 ký tự";
    if (!formData.age || isNaN(formData.age) || formData.age < 18 || formData.age > 100) newErrors.age = "Tuổi từ 18-100";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email không hợp lệ";
    if (!formData.phone || !/^\d{10,15}$/.test(formData.phone)) newErrors.phone = "SĐT từ 10-15 số";
    if (!formData.terms) newErrors.terms = "Bạn phải đồng ý với điều khoản";

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) onSubmit(formData);
  };

  return (
    <Container>
      <h3>{title}</h3>
      {showAlert && <Alert variant="danger">Vui lòng sửa lỗi trước khi gửi</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control type="text" name="age" value={formData.age} onChange={handleChange} isInvalid={!!errors.age} />
          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} isInvalid={!!errors.email} />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} isInvalid={!!errors.phone} />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formTerms">
          <Form.Check type="checkbox" name="terms" label="Đồng ý với điều khoản" onChange={handleChange} isInvalid={!!errors.terms} />
        </Form.Group>

        <Button variant="primary" type="submit">Gửi</Button>
      </Form>
    </Container>
  );
};

MyForm.propTypes = { title: PropTypes.string.isRequired, onSubmit: PropTypes.func.isRequired };
export default MyForm;
