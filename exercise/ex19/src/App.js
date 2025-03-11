import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import animals from './data';
import AnimalCard from './AnimalCard';

function showAdditionalData(additional) {
  const info = Object.entries(additional)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  alert(info);
}

function App() {
  return (
    <Container>
      <h1 className="text-center my-4">Animal Information</h1>
      <Row>
        {animals.map((animal) => (
          <Col md={4} sm={6} key={animal.name}>
            <AnimalCard {...animal} showAdditional={showAdditionalData} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
