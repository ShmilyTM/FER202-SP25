import React, { useState } from "react";

const SearchFilter = () => {
  const items = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Filter</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
