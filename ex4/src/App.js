import React from 'react';
import PeopleExercise from './components/PeopleExercise';
import CompaniesExercise from './components/CompaniesExercise';
import AgesExercise from './components/AgesExercise';
import Utilities from './components/Utilities';

function App() {
    return (
        <div>
            <h1>JSX Exercises</h1>
            <PeopleExercise />
            <CompaniesExercise />
            <AgesExercise />
            <Utilities />
        </div>
    );
}

export default App;
