'use client';

export default function SongInfo({ currentSong, isPlaying }) {
  return (
    <div className="song-info-container">
      <div className="album-art-wrapper">
        <div className={`album-art ${isPlaying ? 'playing' : ''}`}>
          <img 
            src={currentSong.cover || '/images/album-cover.jpg'} 
            alt={currentSong.title}
          />
        </div>
      </div>
      
      <div className="song-details">
        <h2 className="song-title">{currentSong.title}</h2>
        <p className="song-artist">{currentSong.artist}</p>
        <p className="song-album">{currentSong.album}</p>
      </div>
      
      <div className="song-progress">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <div className="time-info">
          <span className="current-time">2:15</span>
          <span className="total-time">3:45</span>
        </div>
      </div>
    </div>
  );
}