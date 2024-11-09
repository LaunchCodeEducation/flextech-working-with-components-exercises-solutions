import React from "react";
import UserProfile from "./UserProfile";
import UserStats from "./UserStats";

function Dashboard() {
  const user = { name: "Alice", age: 30 };
  return (
    <div>
      <UserProfile user={user} />
      <UserStats />
    </div>
  );
}

export default Dashboard;
