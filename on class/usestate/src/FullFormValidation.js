import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function FullFormValidation() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      name.length > 0 &&
      gender.length > 0 &&
      country.length > 0 &&
      termsAccepted
    );
  }, [name, gender, country, termsAccepted]);

  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isValid={name.length > 0}
        />
      </Form.Group>

      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <Form.Check
          type="radio"
          label="Male"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        <Form.Check
          type="radio"
          label="Female"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
         <Form.Check
          type="radio"
          label="Other"
          name="gender"
          value="Other"
          checked={gender === "Other"}
          onChange={(e) => setGender(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control
          as="select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select Country</option>
          <option value="HCM">Ho Chi Minh</option>
          <option value="DN">Da Nang</option>
          <option value="HN">Ha Noi</option>

        </Form.Control>
      </Form.Group>

      <Form.Group controlId="terms">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isFormValid}>
        Submit
      </Button>
    </Form>
  );
}

export default FullFormValidation;
