import React from "react";
import "./favoritesCard.css"; // Import the CSS file

const Card = () => {
  const songs1 = [
    { title: "All At Once", artist: "Pete Yorn", duration: "243.867" },
    { title: "All Kinds of Time", artist: "Fountains of Wayne", duration: "261.747" },
    { title: "Almost Over", artist: "Elliott Smith", duration: "131.76" },
    { title: "Alone Again Or", artist: "Calexico", duration: "204.48" },
    { title: "American Man", artist: "Velvet Revolver", duration: "236.293" },
    { title: "American Waste", artist: "Black Flag", duration: "93.027" },
  ];


  return (
    <div className="card-container">
      {songs1.map((song, index) => (
        <div key={index} className="song-card">
          <div>
            <div className="song-title">{song.title}</div>
            <div className="song-artist">{song.artist}</div>
          </div>
          <div className="song-duration">
          {String(Math.floor(song.duration / 60)).padStart(2, '0')}:
          {String((song.duration % 60).toFixed(0)).padStart(2, '0')}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;