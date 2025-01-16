import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <h1>
      Hello <span style={{ color: "blue" }}>React</span>
    </h1>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


export default App;
