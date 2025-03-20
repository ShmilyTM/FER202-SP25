import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./components/Home";
import News from "./components/News";
import Quiz from "./components/Quiz";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
