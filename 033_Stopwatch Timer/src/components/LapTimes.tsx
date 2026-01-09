import React from "react";

interface Lap {
  id: number;
  time: number;
  totalTime: number;
}

interface LapTimesProps {
  laps: Lap[];
  formatTime: (time: number) => string;
}

export default function LapTimes({ laps, formatTime }: LapTimesProps) {
  // Find fastest and slowest lap times
  const lapTimes = laps.map(lap => lap.time);
  const fastestTime = Math.min(...lapTimes);
  const slowestTime = Math.max(...lapTimes);

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left py-3 px-4 text-gray-400 font-semibold">Lap</th>
            <th className="text-left py-3 px-4 text-gray-400 font-semibold">Lap Time</th>
            <th className="text-left py-3 px-4 text-gray-400 font-semibold">Total Time</th>
            <th className="text-left py-3 px-4 text-gray-400 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {laps.map((lap, index) => {
            const isFastest = lap.time === fastestTime && laps.length > 1;
            const isSlowest = lap.time === slowestTime && laps.length > 1;
            
            return (
              <tr 
                key={lap.id} 
                className={`border-b border-gray-800 hover:bg-gray-800/30 transition-colors ${
                  isFastest ? "bg-green-900/20" : ""
                } ${isSlowest ? "bg-red-900/20" : ""}`}
              >
                <td className="py-4 px-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white font-bold">
                    {lap.id}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`text-xl font-mono font-bold ${
                    isFastest ? "text-green-400" : 
                    isSlowest ? "text-red-400" : 
                    "text-white"
                  }`}>
                    {formatTime(lap.time)}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-300 font-mono">
                  {formatTime(lap.totalTime)}
                </td>
                <td className="py-4 px-4">
                  {isFastest && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-400">
                      Fastest
                    </span>
                  )}
                  {isSlowest && !isFastest && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-900/30 text-red-400">
                      Slowest
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}