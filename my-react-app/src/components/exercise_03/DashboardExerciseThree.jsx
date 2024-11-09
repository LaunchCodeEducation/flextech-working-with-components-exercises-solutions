import React from "react";
import UserProfileExerciseThree from "./UserProfileExerciseThree";
import UserStatsExerciseTwo from "../exercise_02/UserStatsExerciseTwo";

function Dashboard() {
  const user = { name: "Alice", age: 30 };
  return (
    <div>
      <UserProfileExerciseThree user={user} />
      <UserStatsExerciseTwo />
    </div>
  );
}

export default Dashboard;
