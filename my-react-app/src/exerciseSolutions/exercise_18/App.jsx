import "./App.css";
import React, { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(1);

  const factorial = useMemo(() => {
    console.log("Calculating factorial");
    const computeFactorial = (n) => (n <= 1 ? 1 : n * computeFactorial(n - 1));
    return computeFactorial(number);
  }, [number]);

  return (
    <div>
      <h2>
        Factorial of {number} is {factorial}
      </h2>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
    </div>
  );
}

export default App;
