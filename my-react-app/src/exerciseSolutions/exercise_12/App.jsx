import "./App.css";
import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import FaultyComponent from "./FaultyComponent";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <FaultyComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
