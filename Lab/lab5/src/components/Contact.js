import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    agree: false,
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);
  };

  return (
    <div className="container mt-4">
      <h2>Contact</h2>
      <form noValidate onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <label className="form-label">First name</label>
            <input
              type="text"
              className={`form-control ${validated && !formData.firstName ? "is-invalid" : "is-valid"}`}
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Last name</label>
            <input
              type="text"
              className={`form-control ${validated && !formData.lastName ? "is-invalid" : "is-valid"}`}
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Username</label>
            <input
              type="text"
              className={`form-control ${validated && !formData.username ? "is-invalid" : "is-valid"}`}
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {validated && !formData.username && <div className="invalid-feedback">Please choose a username.</div>}
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-4">
            <label className="form-label">City</label>
            <input
              type="text"
              className={`form-control ${validated && !formData.city ? "is-invalid" : "is-valid"}`}
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            {validated && !formData.city && <div className="invalid-feedback">Please provide a valid city.</div>}
          </div>
          <div className="col-md-4">
            <label className="form-label">State</label>
            <input
              type="text"
              className={`form-control ${validated && !formData.state ? "is-invalid" : "is-valid"}`}
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
            {validated && !formData.state && <div className="invalid-feedback">Please provide a valid state.</div>}
          </div>
          <div className="col-md-4">
            <label className="form-label">Zip</label>
            <input
              type="text"
              className={`form-control ${validated && !formData.zip ? "is-invalid" : "is-valid"}`}
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
            {validated && !formData.zip && <div className="invalid-feedback">Please provide a valid zip.</div>}
          </div>
        </div>

        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <label className="form-check-label">Agree to terms and conditions</label>
          {validated && !formData.agree && <div className="invalid-feedback d-block">You must agree before submitting.</div>}
        </div>

        <button className="btn btn-primary mt-3" type="submit">
          Submit form
        </button>
      </form>
    </div>
  );
};

export default Contact;
