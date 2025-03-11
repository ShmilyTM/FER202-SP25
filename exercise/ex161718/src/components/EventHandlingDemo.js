import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <Card className="shadow-lg rounded p-4 text-center">
      <Card.Body>
        <Card.Title className="mb-3"> Event Handling Demo</Card.Title>
        <Card.Text className="fs-4">Count: {count}</Card.Text>
        <Button variant="primary" size="lg" onClick={handleButtonClick}>
          Increase Count
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EventHandlingDemo;
