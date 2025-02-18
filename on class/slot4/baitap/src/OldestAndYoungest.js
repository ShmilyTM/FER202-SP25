function OldestAndYoungest() {
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 20 },
      { name: "Dave", age: 35 },
    ];
  
    const oldest = people.reduce((max, person) => (person.age > max.age ? person : max), people[0]);
    const youngest = people.reduce((min, person) => (person.age < min.age ? person : min), people[0]);
  
    return (
      <div>
        <h3>Oldest and Youngest:</h3>
        <p>Oldest: {oldest.name} ({oldest.age} years)</p>
        <p>Youngest: {youngest.name} ({youngest.age} years)</p>
      </div>
    );
  }
  
  export default OldestAndYoungest;
  