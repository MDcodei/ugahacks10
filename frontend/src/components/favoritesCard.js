import React from "react";
import "./favoritesCard.css"; // Import the CSS file

const Card = () => {
  const songs = [
    { title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55" },
    { title: "Hotel California", artist: "Eagles", duration: "6:30" },
    { title: "Stairway to Heaven", artist: "Led Zeppelin", duration: "8:02" },
    { title: "Imagine", artist: "John Lennon", duration: "3:03" },
    { title: "Smells Like Teen Spirit", artist: "Nirvana", duration: "5:01" },
    { title: "Rolling in the Deep", artist: "Adele", duration: "3:48" },
    { title: "Shape of You", artist: "Ed Sheeran", duration: "3:53" },
    { title: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
  ];

  return (
    <div className="card-container">
      {songs.map((song, index) => (
        <div key={index} className="song-card">
          <div>
            <div className="song-title">{song.title}</div>
            <div className="song-artist">{song.artist}</div>
          </div>
          <div className="song-duration">{song.duration}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;