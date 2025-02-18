function AverageAgeByOccupation() {
    const people = [
      { name: "Alice", age: 25, occupation: "Engineer" },
      { name: "Bob", age: 30, occupation: "Designer" },
      { name: "Charlie", age: 20, occupation: "Engineer" },
      { name: "Dave", age: 35, occupation: "Designer" },
    ];
  
    const grouped = people.reduce((acc, person) => {
      if (!acc[person.occupation]) {
        acc[person.occupation] = { totalAge: 0, count: 0 };
      }
      acc[person.occupation].totalAge += person.age;
      acc[person.occupation].count += 1;
      return acc;
    }, {});
  
    const averageAges = Object.entries(grouped).map(([occupation, data]) => ({
      occupation,
      averageAge: (data.totalAge / data.count).toFixed(2),
    }));
  
    return (
      <div>
        <h3>Average Age by Occupation:</h3>
        <ul>
          {averageAges.map((entry, index) => (
            <li key={index}>
              {entry.occupation}: {entry.averageAge} years
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default AverageAgeByOccupation;
  