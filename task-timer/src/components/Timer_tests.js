// src/components/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);


// TODO: impelement startTimer, pauseTimer, resetTimer functions
// When the start button is clicked, the timer should start counting up
// When the pause button is clicked, the timer should pause
// When the reset button is clicked, the timer should reset to 0
// The timer should display the time in the format 'mm:ss'
// The start button should be disabled when the timer is active
// The pause button should be disabled when the timer is not active
// The reset button should be disabled when the timer is not active
// The timer should increment every second
// The timer should stop incrementing when paused
  const startTimer = () => {};

  const pauseTimer = () => {};

  const resetTimer = () => {};

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <h1>Task Timer</h1>
      <div className="timer">
        <h2>{formatTime(time)}</h2>
        <button onClick={startTimer} disabled={isActive && !isPaused}>Start</button>
        <button onClick={pauseTimer} disabled={!isActive || isPaused}>Pause</button>
        <button onClick={resetTimer} disabled={!isActive}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;