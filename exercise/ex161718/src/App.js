import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventHandlingDemo from './components/EventHandlingDemo';
import RenderAndCommitDemo from './components/RenderAndCommitDemo';
import SnapshotDemo from './components/SnapshotDemo';
import MyAlert from './components/MyAlert';
import MyDropdown from './components/MyDropdown';
import MyModal from './components/MyModal';
import MyRadioButton from './components/MyRadioButton';
import './App.css';

function App() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-gradient py-5">
      <h1 className="text-center mb-4 fw-bold text-white bg-dark px-4 py-2 rounded"> Event Demo</h1>

      <Row className="mb-4 w-100 d-flex justify-content-center">
        <Col md={8} lg={6}>
          <div className="p-3 bg-primary rounded shadow-lg">
            <EventHandlingDemo />
          </div>
        </Col>
      </Row>

      <Row className="mb-4 w-100 d-flex justify-content-center">
        <Col md={8} lg={6}>
          <div className="p-3 bg-success rounded shadow-lg">
            <RenderAndCommitDemo />
          </div>
        </Col>
      </Row>

      <Row className="mb-4 w-100 d-flex justify-content-center">
        <Col md={8} lg={6}>
          <div className="p-3 bg-primary rounded shadow-lg">
            <SnapshotDemo />
          </div>
        </Col>
      </Row>
      
      <Row className="mb-4 w-100 d-flex justify-content-center">
        <Col md={8} lg={6}>
          <MyAlert />
        </Col>
      </Row>
      
      <Row className="mb-4 w-100 d-flex justify-content-center">
        <Col md={8} lg={6}>
          <MyDropdown />
        </Col>
      </Row>
      
      <Row className="mb-4 w-100 d-flex justify-content-center">
        <Col md={8} lg={6}>
          <MyModal />
        </Col>
      </Row>
      
      <Row className="mb-4 w-100 d-flex justify-content-center">
        <Col md={8} lg={6}>
          <MyRadioButton />
        </Col>
      </Row>
    </Container>
  );
}

export default App; 