import React from 'react';
import '../styles/CompaniesExercise.css';

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
];

function CompaniesExercise() {
    const after1987 = companies.filter(company => company.start > 1987);

    return (
        <div className="companies-exercise">
            <h2>Companies</h2>
            <h3>All Companies:</h3>
            <ul>
                {companies.map(company => (
                    <li key={company.name}>{company.name}</li>
                ))}
            </ul>
            <h3>Started After 1987:</h3>
            <ul>
                {after1987.map(company => (
                    <li key={company.name}>{company.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CompaniesExercise;
