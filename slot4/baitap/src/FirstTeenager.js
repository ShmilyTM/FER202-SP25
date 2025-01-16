function FirstTeenager() {
    const people = [
      { name: "Alice", age: 14 },
      { name: "Bob", age: 17 },
      { name: "Charlie", age: 15 },
    ];
    const teenager = people.find(person => person.age >= 13 && person.age <= 19);
    return <div>First Teenager: {teenager ? teenager.name : "None"}</div>;
  }
  export default FirstTeenager;
  