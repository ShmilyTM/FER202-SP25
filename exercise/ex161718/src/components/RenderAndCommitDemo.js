import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <Card className="shadow-lg rounded p-4 text-center">
      <Card.Body>
        <Card.Title className="mb-3"> Render and Commit Demo</Card.Title>
        <Card.Text className="fs-4">Count: {count}</Card.Text>
        <Button variant="success" size="lg" onClick={handleClick}>
           Increment
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RenderAndCommitDemo;
