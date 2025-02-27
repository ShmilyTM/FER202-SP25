import React, { useState } from "react";
import { CartProvider } from "./components/CartContext";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";
import "./components/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const dishes = [
  {
    id: 1,
    name: "Uthappizza",
    image: "/images/1.jpg",
    price: "4.99",
    description: "A unique combination of Indian Uthappam and Italian pizza.",
  },
  {
    id: 2,
    name: "Zucchipakoda",
    image: "/images/2.jpg",
    price: "1.99",
    description: "Deep fried Zucchini with chickpea batter.",
  },
  {
    id: 3,
    name: "Vadonut",
    image: "/images/4.jpg",
    price: "1.99",
    description: "A combination of vada and donut.",
  },
  {
    id: 4,
    name: "ElaiCheese Cake",
    image: "/images/3.jpg",
    price: "2.99",
    description: "New York Style Cheesecake with Indian cardamoms.",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const filteredDishes = dishes.filter(
    (dish) =>
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <CartProvider>
      <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
        <input
          type="text"
          placeholder="Tìm món ăn..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <DishesList dishes={filteredDishes} />
        <Cart />
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
        </button>
      </div>
    </CartProvider>
  );
}

export default App;
