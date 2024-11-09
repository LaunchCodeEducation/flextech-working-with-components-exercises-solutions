import React from "react";
import UserProfile from "./UserProfile";
import UserStats from "./UserStats";

function Dashboard() {
  return (
    <div>
      <UserProfile />
      <UserStats />
    </div>
  );
}

export default Dashboard;
