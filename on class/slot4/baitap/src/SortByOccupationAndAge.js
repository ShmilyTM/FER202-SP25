function SortByOccupationAndAge() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 20, occupation: "Engineer" },
    { name: "Dave", age: 35, occupation: "Designer" },
  ];

  const sortedPeople = [...people].sort((a, b) => {
    if (a.occupation === b.occupation) {
      return a.age - b.age;
    }
    return a.occupation.localeCompare(b.occupation);
  });

  return (
    <div>
      <h3>Sorted by Occupation and Age:</h3>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            {person.name} ({person.occupation} - {person.age} years)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortByOccupationAndAge;
