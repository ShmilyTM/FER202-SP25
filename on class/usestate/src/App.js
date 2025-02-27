import React, { useState } from 'react';
import ValidatedInput from './ValidatedInput';
import ValidationForm from './ValidationForm';
import FullFormValidation from './FullFormValidation';

const App = () => {
  const [userId, setUserId] = useState(1);

  return (
    <div>
       <ValidatedInput />
       <ValidationForm />
       <FullFormValidation />
    </div>
  );
};

export default App;
