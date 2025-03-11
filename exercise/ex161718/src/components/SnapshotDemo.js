import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const SnapshotDemo = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSnapshot = () => {
    setSnapshot(count);
  };

  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  };

  return (
    <Card className="shadow-lg rounded p-4 text-center">
      <Card.Body>
        <Card.Title className="mb-3"> State as a Snapshot Demo</Card.Title>
        <Card.Text className="fs-4">Count: {count}</Card.Text>
        <ButtonGroup className="d-flex justify-content-center">
          <Button variant="primary" size="lg" onClick={handleIncrement}>
             Increment
          </Button>
          <Button variant="warning" size="lg" onClick={handleSnapshot}>
             Take Snapshot
          </Button>
          <Button variant="danger" size="lg" onClick={handleRestore}>
             Restore Snapshot
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default SnapshotDemo;
