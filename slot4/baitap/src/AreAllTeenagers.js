function AreAllTeenagers() {
    const people = [
      { name: "Alice", age: 14 },
      { name: "Bob", age: 17 },
      { name: "Charlie", age: 15 },
    ];
    const allTeenagers = people.every(person => person.age >= 13 && person.age <= 19);
    return <div>Are all teenagers? {allTeenagers ? "Yes" : "No"}</div>;
  }
  export default AreAllTeenagers;
  