"use client";

import { useState, useEffect, useRef } from "react";
import LapTimes from "./LapTimes";

interface Lap {
  id: number;
  time: number;
  totalTime: number;
}

export default function Stopwatch() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<Lap[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lapCountRef = useRef<number>(0);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleLap = () => {
    if (isRunning) {
      lapCountRef.current += 1;
      const newLap: Lap = {
        id: lapCountRef.current,
        time: laps.length === 0 ? time : time - laps[laps.length - 1].totalTime,
        totalTime: time,
      };
      setLaps([newLap, ...laps]);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    lapCountRef.current = 0;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Timer Display */}
      <div className="glass-effect rounded-3xl p-8 md:p-12 mb-8">
        <div className="text-center">
          <div className="text-6xl md:text-7xl lg:text-8xl font-mono font-bold mb-8 text-white">
            {formatTime(time)}
          </div>
          
          {/* Controls */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={handleStartStop}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                isRunning
                  ? "bg-red-500 hover:bg-red-600 text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              {isRunning ? "Stop" : "Start"}
            </button>
            
            <button
              onClick={handleLap}
              disabled={!isRunning}
              className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                isRunning
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-blue-300 cursor-not-allowed text-white"
              }`}
            >
              Lap
            </button>
            
            <button
              onClick={handleReset}
              className="px-8 py-4 rounded-full font-semibold text-lg bg-gray-700 hover:bg-gray-600 text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Lap Times Section */}
      <div className="glass-effect rounded-3xl p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          Lap Times
        </h2>
        
        {laps.length > 0 ? (
          <LapTimes laps={laps} formatTime={formatTime} />
        ) : (
          <div className="text-center py-8 text-gray-400">
            <p className="text-lg">No lap times recorded yet</p>
            <p className="text-sm mt-2">Click "Lap" while timer is running to record lap times</p>
          </div>
        )}
        
        {/* Stats */}
        {laps.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="glass-effect rounded-xl p-4">
                <p className="text-gray-400 text-sm">Total Laps</p>
                <p className="text-2xl font-bold text-white">{laps.length}</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-gray-400 text-sm">Current Time</p>
                <p className="text-2xl font-bold text-white">{formatTime(time)}</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-gray-400 text-sm">Status</p>
                <p className="text-2xl font-bold text-green-400">
                  {isRunning ? "Running" : "Paused"}
                </p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-gray-400 text-sm">Fastest Lap</p>
                <p className="text-2xl font-bold text-white">
                  {formatTime(Math.min(...laps.map(lap => lap.time)))}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}