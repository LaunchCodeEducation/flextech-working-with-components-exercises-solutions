import "./App.css";
import React from "react";
import withLoading from "./hoc/withLoading";
import DataDisplay from "./DataDisplay";

function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ message: "Hello, World!" }), 2000)
  );
}

const DataDisplayWithLoading = withLoading(DataDisplay, fetchData);

function App() {
  return (
    <div>
      <DataDisplayWithLoading />
    </div>
  );
}

export default App;
