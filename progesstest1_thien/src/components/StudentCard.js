import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const StudentCard = ({ student }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px", borderColor: "#f06d0e" }}>
      <Card.Img variant="top" src={student.image} />
      <Card.Body className="text-center">
        <Card.Text><strong>{student.id}</strong></Card.Text>
        <Card.Text>{student.name}</Card.Text>
        <Card.Text>{student.location}</Card.Text>
        <Form>
          <Form.Check type="radio" label="Absent" name={`status-${student.id}`} />
          <Form.Check type="radio" label="Present" name={`status-${student.id}`} />
        </Form>
        <Button className="mt-2">Submit</Button>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
