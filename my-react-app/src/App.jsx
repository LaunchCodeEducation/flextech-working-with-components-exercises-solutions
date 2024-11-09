import React, { Suspense, lazy } from "react";
import "./App.css";

const LazyComponent = lazy(() => import("./components/LazyComponent"));

function App() {
  return (
    <div>
      <h1>Main App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
