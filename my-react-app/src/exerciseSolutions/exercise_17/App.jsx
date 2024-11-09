import "./App.css";
import React, { useState } from "react";
import PureComponent from "./components/PureComponent";

function App() {
  const [count, setCount] = useState(0);
  const value = "Constant Value";

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <PureComponent value={value} />
    </div>
  );
}

export default App;
