import React from 'react';
import '../styles/PeopleExercise.css';

const people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 },
];

function PeopleExercise() {
    const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);
    const allTeenagers = people.filter(person => person.age >= 10 && person.age <= 20);
    const isEveryTeenager = people.every(person => person.age >= 10 && person.age <= 20);
    const isAnyTeenager = people.some(person => person.age >= 10 && person.age <= 20);

    return (
        <div className="people-exercise">
            <h2>People</h2>
            <p>First Teenager: {firstTeenager ? firstTeenager.name : 'None'}</p>
            <p>All Teenagers: {allTeenagers.map(person => person.name).join(', ')}</p>
            <p>Is Every Teenager? {isEveryTeenager ? 'Yes' : 'No'}</p>
            <p>Is Any Teenager? {isAnyTeenager ? 'Yes' : 'No'}</p>
        </div>
    );
}

export default PeopleExercise;
