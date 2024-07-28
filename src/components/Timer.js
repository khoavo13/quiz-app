import React, { useState, useEffect } from 'react';
import { Progress } from 'reactstrap';

export default function Timer({ duration, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft, onTimeUp]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const percentage = (timeLeft / duration) * 100;

  return (
    <div className="timer"> 
      <h3>{formatTime(timeLeft)}</h3>     
      <Progress value={percentage} />   
    </div>
  );
}