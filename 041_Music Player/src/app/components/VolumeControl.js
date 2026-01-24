'use client';

import { useState } from 'react';
import { FaVolumeUp, FaVolumeDown, FaVolumeMute, FaVolumeOff } from 'react-icons/fa';

export default function VolumeControl() {
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  
  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted && newVolume > 0) {
      setIsMuted(false);
    }
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <FaVolumeMute />;
    if (volume < 50) return <FaVolumeDown />;
    return <FaVolumeUp />;
  };
  
  return (
    <div className="volume-control">
      <button 
        className="control-btn"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {getVolumeIcon()}
      </button>
      
      <div className="volume-slider-container">
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="volume-slider"
          aria-label="Volume"
        />
        <div className="volume-level">
          <div 
            className="volume-fill" 
            style={{ width: `${isMuted ? 0 : volume}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}