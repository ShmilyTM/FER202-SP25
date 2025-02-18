function PeopleTable() {
    const people = [
      { name: "Alice", age: 25, occupation: "Engineer" },
      { name: "Bob", age: 30, occupation: "Designer" },
    ];
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  export default PeopleTable;
  