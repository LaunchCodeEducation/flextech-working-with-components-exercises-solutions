import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);

    // Cleanup function
    return () => clearInterval(timerId);
  }, []); // Empty array ensures effect runs only once

  return <h2>Current Time: {time.toLocaleTimeString()}</h2>;
}

export default Timer;
