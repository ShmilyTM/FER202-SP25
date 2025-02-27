import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Card style={{ marginTop: '20px' }}>
      <Card.Body>
        <Card.Title>Window size</Card.Title>
        <Card.Text>
          {windowSize.width} x {windowSize.height}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WindowSize;
