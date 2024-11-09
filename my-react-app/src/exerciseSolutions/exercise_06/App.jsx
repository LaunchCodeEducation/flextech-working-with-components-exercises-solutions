import React, { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import Dashboard from "./Dashboard";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Dashboard />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
