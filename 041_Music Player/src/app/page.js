'use client';

import { useState, useEffect, useRef } from 'react';
import SongInfo from './components/SongInfo';
import PlayerControls from './components/PlayerControls';
import VolumeControl from './components/VolumeControl';
import Playlist from './components/Playlist';
import './globals.css';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [currentSongId, setCurrentSongId] = useState(1);
  const audioRef = useRef(null);
  
  // Mock data for songs
  const songs = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:22",
      cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 2,
      title: "Stay",
      artist: "The Kid LAROI, Justin Bieber",
      album: "F*CK LOVE 3",
      duration: "2:23",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 3,
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      duration: "2:59",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 4,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration: "3:24",
      cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 5,
      title: "Heat Waves",
      artist: "Glass Animals",
      album: "Dreamland",
      duration: "3:59",
      cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    }
  ];
  
  const currentSong = songs.find(song => song.id === currentSongId) || songs[0];
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    
    // In a real app, you would control the audio element
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };
  
  const handleNext = () => {
    let nextId;
    if (isShuffle) {
      // Get a random song that's not the current one
      const otherSongs = songs.filter(song => song.id !== currentSongId);
      const randomIndex = Math.floor(Math.random() * otherSongs.length);
      nextId = otherSongs[randomIndex].id;
    } else {
      nextId = currentSongId === songs.length ? 1 : currentSongId + 1;
    }
    setCurrentSongId(nextId);
    
    // Auto-play next song if currently playing
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  };
  
  const handlePrevious = () => {
    let prevId;
    if (isShuffle) {
      // Get a random song that's not the current one
      const otherSongs = songs.filter(song => song.id !== currentSongId);
      const randomIndex = Math.floor(Math.random() * otherSongs.length);
      prevId = otherSongs[randomIndex].id;
    } else {
      prevId = currentSongId === 1 ? songs.length : currentSongId - 1;
    }
    setCurrentSongId(prevId);
    
    // Auto-play previous song if currently playing
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  };
  
  const handleSelectSong = (songId) => {
    setCurrentSongId(songId);
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };
  
  const handleShuffle = () => {
    setIsShuffle(!isShuffle);
  };
  
  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  };
  
  // Simulate audio playback for demo purposes
  useEffect(() => {
    // In a real app, you would handle audio playback here
    console.log(`Now playing: ${currentSong.title}`);
    
    // Simulate audio ended event
    if (isPlaying) {
      const timer = setTimeout(() => {
        if (isRepeat) {
          // Restart current song
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          }
        } else {
          handleNext();
        }
      }, 10000); // Simulate song length of 10 seconds for demo
      
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentSong, isRepeat]);
  
  return (
    <div className="music-player">
      <header className="player-header">
        <h1 className="app-title">Harmony<span className="highlight">Player</span></h1>
        <p className="app-subtitle">Your mobile music experience</p>
      </header>
      
      <div className="player-main">
        <SongInfo currentSong={currentSong} isPlaying={isPlaying} />
        
        <PlayerControls 
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isShuffle={isShuffle}
          onShuffle={handleShuffle}
          isRepeat={isRepeat}
          onRepeat={handleRepeat}
        />
        
        <VolumeControl />
      </div>
      
      <Playlist 
        songs={songs}
        currentSongId={currentSongId}
        onSelectSong={handleSelectSong}
      />
      
      {/* Hidden audio element for real implementation */}
      <audio 
        ref={audioRef}
        src={currentSong.audioUrl || "#"} 
        preload="metadata"
        style={{ display: 'none' }}
      />
      
      <footer className="player-footer">
        <p>Designed for mobile webview • Built with Next.js</p>
      </footer>
    </div>
  );
}