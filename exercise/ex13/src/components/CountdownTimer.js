import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const CountdownTimer = ({ initialValue }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    if (timeRemaining <= 0) return;

    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeRemaining]);

  return (
    <Alert variant="info">
      Time Remaining: {timeRemaining}
    </Alert>
  );
};

export default CountdownTimer;
