'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/CountdownTimer.module.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Set target date to 7 days from now
  const [targetDate, setTargetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
  });

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isRunning, setIsRunning] = useState(true);
  const [customDate, setCustomDate] = useState('');
  const [showCustom, setShowCustom] = useState(false);

  const calculateTimeLeft = (target: Date): TimeLeft => {
    const difference = target.getTime() - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  };

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, isRunning]);

  const handleReset = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    setTargetDate(date);
    setIsRunning(true);
  };

  const handleCustomDate = () => {
    if (customDate) {
      const date = new Date(customDate);
      if (date > new Date()) {
        setTargetDate(date);
        setShowCustom(false);
        setIsRunning(true);
      } else {
        alert('Please select a future date!');
      }
    }
  };

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>⏰ Countdown Timer</h1>
      
      <div className={styles.timerContainer}>
        <div className={styles.timerBox}>
          <span className={styles.timerValue}>{formatNumber(timeLeft.days)}</span>
          <span className={styles.timerLabel}>Days</span>
        </div>
        <div className={styles.timerBox}>
          <span className={styles.timerValue}>{formatNumber(timeLeft.hours)}</span>
          <span className={styles.timerLabel}>Hours</span>
        </div>
        <div className={styles.timerBox}>
          <span className={styles.timerValue}>{formatNumber(timeLeft.minutes)}</span>
          <span className={styles.timerLabel}>Minutes</span>
        </div>
        <div className={styles.timerBox}>
          <span className={styles.timerValue}>{formatNumber(timeLeft.seconds)}</span>
          <span className={styles.timerLabel}>Seconds</span>
        </div>
      </div>

      <div className={styles.controls}>
        <button 
          className={`${styles.btn} ${styles.btnPause}`}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? '⏸️ Pause' : '▶️ Resume'}
        </button>
        
        <button 
          className={`${styles.btn} ${styles.btnReset}`}
          onClick={handleReset}
        >
          🔄 Reset (7 Days)
        </button>
        
        <button 
          className={`${styles.btn} ${styles.btnCustom}`}
          onClick={() => setShowCustom(!showCustom)}
        >
          📅 Custom Date
        </button>
      </div>

      {showCustom && (
        <div className={styles.customDateContainer}>
          <input
            type="datetime-local"
            className={styles.dateInput}
            value={customDate}
            onChange={(e) => setCustomDate(e.target.value)}
            min={new Date().toISOString().slice(0, 16)}
          />
          <button 
            className={`${styles.btn} ${styles.btnApply}`}
            onClick={handleCustomDate}
          >
            Apply Date
          </button>
        </div>
      )}

      {timeLeft.days === 0 && 
       timeLeft.hours === 0 && 
       timeLeft.minutes === 0 && 
       timeLeft.seconds === 0 && (
        <div className={styles.message}>
          🎉 Time's Up! 🎉
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;