'use client';

import { useState } from 'react';
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaRandom, FaRedo } from 'react-icons/fa';

export default function PlayerControls({ 
  isPlaying, 
  onPlayPause, 
  onNext, 
  onPrevious,
  isShuffle,
  onShuffle,
  isRepeat,
  onRepeat
}) {
  return (
    <div className="player-controls">
      <div className="secondary-controls">
        <button 
          className={`control-btn ${isShuffle ? 'active' : ''}`}
          onClick={onShuffle}
          aria-label="Shuffle"
        >
          <FaRandom />
        </button>
        <button 
          className={`control-btn ${isRepeat ? 'active' : ''}`}
          onClick={onRepeat}
          aria-label="Repeat"
        >
          <FaRedo />
        </button>
      </div>
      
      <div className="primary-controls">
        <button 
          className="control-btn large"
          onClick={onPrevious}
          aria-label="Previous song"
        >
          <FaStepBackward />
        </button>
        
        <button 
          className="play-pause-btn"
          onClick={onPlayPause}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        
        <button 
          className="control-btn large"
          onClick={onNext}
          aria-label="Next song"
        >
          <FaStepForward />
        </button>
      </div>
    </div>
  );
}