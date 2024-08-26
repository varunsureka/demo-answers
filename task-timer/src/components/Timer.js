// src/components/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (isPaused) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused(true);
  };

  const resetTimer = () => {
    setTime(0);
    setIsActive(false);
    setIsPaused(true);
  };

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