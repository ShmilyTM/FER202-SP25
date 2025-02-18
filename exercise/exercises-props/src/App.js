import NameList from "./components/NameList";
import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "./components/StudentCard";

function App() {
  const userData = { name: "Le Thien", age: 20 };
  const students = [
    { name: "nguyen van A", age: 25, avatar: "./images/student1.jpg" },
    { name: "hoang thi B", age: 22, avatar: "./images/student2.jpg" },
    { name: "tran van C", age: 23, avatar: "./images/student3.jpg" },
  ];

  return (
    <>
     <Welcome name={userData.name} />
     <UserProfile user={userData} />
      <Welcome name="Le Thien" />
      <Welcome name="thienlvde180492@fpt.edu.vn" />
      <Container>
        <h1 className="my-4 text-center">Student Information</h1>
        <Row>
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
