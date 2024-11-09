import React from "react";

function PureComponent({ value }) {
  console.log("PureComponent rendered");
  return <div>Value: {value}</div>;
}

export default React.memo(PureComponent);
