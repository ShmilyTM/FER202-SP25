import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "./StudentCard";

const students = [
  { id: "DE160182", name: "Nguyễn Hữu Quốc Khánh", location: "Đà Nẵng", image: "./images/stu1.png" },
  { id: "DE160377", name: "Choy Vĩnh Thiện", location: "Quảng Nam", image: "./images/stu2.png" },
  { id: "DE160547", name: "Đỗ Nguyễn Phúc", location: "Quảng Nam", image: "./images/stu3.png" },
  { id: "DE170049", name: "Lê Hoàng Minh", location: "Đà Nẵng", image: "./images/stu4.png" }
];

const StudentList = () => {
  return (
    <Container className="my-4 text-center">
      <h2>Students Detail</h2>
      <Row className="justify-content-center">
        {students.map((student, index) => (
          <Col key={index} md={3}>
            <StudentCard student={student} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StudentList;
