import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import CarList from "./components/CarList";
import CarDetail from "./components/CarDetails";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/CarsList" element={<CarList />} />
                <Route path="/CarsList/:id" element={<CarDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
