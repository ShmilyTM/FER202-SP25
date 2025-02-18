function GroupByOccupation() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 20, occupation: "Engineer" },
    { name: "Dave", age: 35, occupation: "Designer" },
  ];

  const grouped = people.reduce((acc, person) => {
    if (!acc[person.occupation]) {
      acc[person.occupation] = [];
    }
    acc[person.occupation].push(person);
    return acc;
  }, {});

  return (
    <div>
      <h3>Grouped by Occupation:</h3>
      {Object.entries(grouped).map(([occupation, people], index) => (
        <div key={index}>
          <h4>{occupation}</h4>
          <ul>
            {people.map((person, i) => (
              <li key={i}>
                {person.name} ({person.age} years)
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupByOccupation;
