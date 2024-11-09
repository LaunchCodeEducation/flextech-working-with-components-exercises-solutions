import React from "react";
import UserProfile from "./UserProfile";
import UserStats from "./UserStats";
import DeepNestedComponent from "./DeepNestedComponent";

function Dashboard() {
  return (
    <div>
      <UserProfile user={{ name: "Alice", age: 30 }} />
      <UserStats />
      <DeepNestedComponent />
    </div>
  );
}

export default Dashboard;
