import React from "react";

function FaultyComponent() {
  throw new Error("I crashed!");
  return <div>This will not render.</div>;
}

export default FaultyComponent;
