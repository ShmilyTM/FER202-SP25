import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return;

    switch (operation) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by zero");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Number 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Number 2"
      />
      <div>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>*</button>
        <button onClick={() => calculate("/")}>/</button>
      </div>
      <h3>Result: {result}</h3>
    </div>
  );
};

export default Calculator;
