import { useState, useEffect, useCallback, useRef } from 'react';
import { TimerMode, TimerSettings } from '@/types';

const DEFAULT_SETTINGS: TimerSettings = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
  longBreakInterval: 4,
  autoStartBreaks: false,
  autoStartPomodoros: false,
};

export const useTimer = () => {
  const [settings, setSettings] = useState<TimerSettings>(DEFAULT_SETTINGS);
  const [mode, setMode] = useState<TimerMode>('pomodoro');
  const [timeLeft, setTimeLeft] = useState(settings.pomodoro);
  const [isActive, setIsActive] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getTimeForMode = useCallback((currentMode: TimerMode): number => {
    switch (currentMode) {
      case 'pomodoro':
        return settings.pomodoro;
      case 'shortBreak':
        return settings.shortBreak;
      case 'longBreak':
        return settings.longBreak;
    }
  }, [settings]);

  const resetTimer = useCallback(() => {
    setTimeLeft(getTimeForMode(mode));
    setIsActive(false);
  }, [mode, getTimeForMode]);

  const switchMode = useCallback((newMode: TimerMode) => {
    setMode(newMode);
    setTimeLeft(getTimeForMode(newMode));
    setIsActive(false);
  }, [getTimeForMode]);

  const toggleTimer = () => {
    if (timeLeft === 0) {
      resetTimer();
    }
    setIsActive(!isActive);
  };

  const nextMode = useCallback(() => {
    const isPomodoro = mode === 'pomodoro';
    
    if (isPomodoro) {
      const newCount = pomodoroCount + 1;
      setPomodoroCount(newCount);
      
      if (newCount % settings.longBreakInterval === 0) {
        switchMode('longBreak');
      } else {
        switchMode('shortBreak');
      }
    } else {
      switchMode('pomodoro');
    }
  }, [mode, pomodoroCount, settings.longBreakInterval, switchMode]);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Timer completed
            setIsActive(false);
            
            // Auto-start next timer if enabled
            if (mode === 'pomodoro' && settings.autoStartBreaks) {
              setTimeout(() => setIsActive(true), 100);
            } else if (mode !== 'pomodoro' && settings.autoStartPomodoros) {
              setTimeout(() => setIsActive(true), 100);
            }
            
            nextMode();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, mode, nextMode, settings.autoStartBreaks, settings.autoStartPomodoros]);

  return {
    mode,
    timeLeft,
    isActive,
    pomodoroCount,
    settings,
    setSettings,
    toggleTimer,
    resetTimer,
    switchMode,
  };
};