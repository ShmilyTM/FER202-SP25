import React, { useState } from 'react';
import UserPosts from './components/UserPosts';
import CountdownTimer from './components/CountdownTimer';
import WindowSize from './components/WindowSize';
import ValidatedInput from './components/ValidatedInput';

const App = () => {
  const [userId, setUserId] = useState(1);
  const validationFunction = (value) => value.length > 3;  // Example validation

  return (
    <div>
      <UserPosts userId={userId} />
      <button onClick={() => setUserId(userId + 1)}>Next User</button>
      <CountdownTimer initialValue={10} />
      <WindowSize />
      <ValidatedInput validationFunction={validationFunction} errorMessage="Input must be at least 4 characters long" />
    </div>
  );
};

export default App;
