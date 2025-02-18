import React from 'react';
import '../styles/AgesExercise.css';

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

function AgesExercise() {
    const sortedAges = [...ages].sort((a, b) => b - a);
    const totalAge = ages.reduce((acc, age) => acc + age, 0);

    return (
        <div className="ages-exercise">
            <h2>Ages </h2>
            <p>Sorted Ages (Descending): {sortedAges.join(', ')}</p>
            <p>Total Age Sum: {totalAge}</p>
        </div>
    );
}

export default AgesExercise;
