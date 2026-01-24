'use client';

export default function Playlist({ songs, currentSongId, onSelectSong }) {
  return (
    <div className="playlist-container">
      <h3 className="playlist-title">Playlist</h3>
      <div className="playlist">
        {songs.map((song) => (
          <div 
            key={song.id}
            className={`playlist-item ${song.id === currentSongId ? 'active' : ''}`}
            onClick={() => onSelectSong(song.id)}
          >
            <div className="playlist-item-info">
              <div className="playlist-item-cover">
                <img src={song.cover || '/images/album-cover.jpg'} alt={song.title} />
              </div>
              <div className="playlist-item-details">
                <h4 className="playlist-item-title">{song.title}</h4>
                <p className="playlist-item-artist">{song.artist}</p>
              </div>
            </div>
            <div className="playlist-item-duration">
              {song.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}