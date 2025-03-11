import React, { useReducer, useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";


const initialState = {
  name: "",
  age: "",
  email: "",
  phone: "",
  agreed: false,
  isSubmitted: false,
};


const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT":
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
};

// Component Form
const MyForm = ({ title, onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value: type === "checkbox" ? checked : value });
  };

  
  const validateForm = () => {
    const newErrors = {};

   
    if (!state.name.trim()) {
      newErrors.name = "Tên không được để trống!";
    } else if (state.name.length < 3 || state.name.length > 50) {
      newErrors.name = "Tên phải chứa từ 3 đến 50 ký tự!";
    }

   
    const age = parseInt(state.age, 10);
    if (!state.age) {
      newErrors.age = "Tuổi không được để trống!";
    } else if (isNaN(age) || age < 18 || age > 100) {
      newErrors.age = "Tuổi phải nằm trong khoảng từ 18 đến 100!";
    }

   
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!state.email) {
      newErrors.email = "Email không được để trống!";
    } else if (!emailPattern.test(state.email)) {
      newErrors.email = "Email không hợp lệ!";
    }

   
    const phonePattern = /^[0-9]{10,15}$/;
    if (!state.phone) {
      newErrors.phone = "Số điện thoại không được để trống!";
    } else if (!phonePattern.test(state.phone)) {
      newErrors.phone = "Số điện thoại phải từ 10 đến 15 chữ số!";
    }


    if (!state.agreed) {
      newErrors.agreed = "Bạn phải đồng ý với điều khoản!";
    }

    
    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);

    return Object.keys(newErrors).length === 0;
  };

  // Xử lý submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch({ type: "SUBMIT" });
      onSubmit(state);
    }
  };

  return (
    <Container>
      <h3>{title}</h3>

      {showAlert && (
        <Alert variant="danger">
          <strong>Lỗi:</strong> Vui lòng kiểm tra lại thông tin nhập vào.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        {/* Tên */}
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Tuổi */}
        <Form.Group controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={state.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Email */}
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Số điện thoại */}
        <Form.Group controlId="formPhone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={state.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Điều khoản */}
        <Form.Group controlId="formTerms">
          <Form.Check
            type="checkbox"
            name="agreed"
            label="Tôi đồng ý với điều khoản sử dụng"
            checked={state.agreed}
            onChange={handleChange}
            isInvalid={!!errors.agreed}
          />
          <Form.Control.Feedback type="invalid">
            {errors.agreed}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Nút Submit */}
        <Button variant="primary" type="submit">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};


MyForm.propTypes = {
  title: PropTypes.string.isRequired, // Tiêu đề phải là chuỗi
  onSubmit: PropTypes.func.isRequired, // Hàm onSubmit phải là function
};

export default MyForm;
