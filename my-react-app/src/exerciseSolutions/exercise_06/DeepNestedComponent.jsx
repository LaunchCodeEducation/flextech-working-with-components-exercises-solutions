import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function DeepNestedComponent() {
  const theme = useContext(ThemeContext);
  return <div>Current Theme: {theme}</div>;
}

export default DeepNestedComponent;
