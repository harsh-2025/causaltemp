import React, { useEffect, useState } from "react";

function Timer({ onTimeout }) {
  const initialTime = 30 * 60; // 30 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        // Auto-submit the quiz when the timer reaches zero
        onTimeout();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, onTimeout]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="timer">
      Time Remaining: {formatTime(timeRemaining)}
    </div>
  );
}

export default Timer;
