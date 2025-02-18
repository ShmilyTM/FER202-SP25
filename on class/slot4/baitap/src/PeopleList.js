function PeopleList() {
    const people = [
      { name: "Alice", age: 25, occupation: "Engineer" },
      { name: "Bob", age: 30, occupation: "Designer" },
    ];
    return (
      <div>
        <ul>
          {people.map((person, index) => (
            <li key={index}>
              {person.name} ({person.age} - {person.occupation})
            </li>
          ))}
        </ul>
      </div>
    );
  }
  export default PeopleList;
  