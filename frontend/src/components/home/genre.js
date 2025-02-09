import React, { useState } from "react";
import "./genre.css";

const genres = [
  "French", "Disco", "Electro", "Soul", "Goth", "IndiePop", "Emo", "Metal",
  "Trip-Hop", "Breakbeat", "Rock", "Ska", "Death-Metal", "Singer-songwriter", "Alt-Rock", "Ambient",
  "Classical", "Afrobeat", "Funk", "Swedish", "Indian", "Folk", "PowerPop", "Dub",
  "Chicago-House", "House", "Garage", "Grindcore", "Country", "Jazz", "Punk", "Hard-Rock",
  "Synthwave", "Trap", "Hard Rock", "Dubstep", "Ambient", "Drum & Bass", "EDM", "Bluegrass"
];

const colors = [
  "#ff4757", "#3742fa", "#ffa502", "#3742fa", "#eccc68", "#5352ed", "#ff7f50", "#1e90ff",
  "#ff6348", "#57606f", "#f9ca24", "#7ed6df", "#e056fd", "#192a56", "#eb4d4b", "#30336b",
  "#22a6b3", "#be2edd", "#4834d4", "#ffbe76", "#ff4757", "#c7ecee", "#dff9fb", "#f0932b",
  "#686de0", "#95afc0", "#130f40", "#ff7979", "#f6e58d", "#7f8fa6", "#273c75", "#e84118",
  "#3742fa", "#0097e6", "#8c7ae6", "#2f3640", "#e1b12c", "#ff4757", "#40739e", "#192a56"
];

const Genre = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreClick = (genre) => {
    if (selectedGenres.includes(genre)) {
      // Remove genre if already selected
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else if (selectedGenres.length < 3) {
      // Add genre if less than 3 are selected
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <div className="genre-grid">
      {genres.map((genre, index) => (
        <div
          key={genre}
          className={`genre-card ${selectedGenres.includes(genre) ? "selected" : ""}`}
          style={{
            backgroundColor: selectedGenres.includes(genre) ? "#27ae60" : colors[index % colors.length],
          }}
          onClick={() => handleGenreClick(genre)}
        >
          {genre}
        </div>
      ))}
    </div>
  );
};

export default Genre;
