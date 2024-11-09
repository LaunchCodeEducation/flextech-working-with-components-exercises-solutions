import "./App.css";
import React from "react";
import useWindowWidth from "./hooks/useWindowWidth";

function App() {
  const width = useWindowWidth();

  return (
    <div>
      <h2>Window Width: {width}px</h2>
    </div>
  );
}

export default App;
