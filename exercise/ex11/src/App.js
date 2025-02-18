import React from "react";
import ToDoList from "./ToDoList";
import Calculator from "./Calculator"; // Thêm import này
import SearchFilter from "./SearchFilter"; // Thêm import này

function App() {
  return (
    <div>
      <h1>React Exercise</h1>
      <ToDoList />
      <Calculator />
      <SearchFilter />
    </div>
  );
}

export default App;
