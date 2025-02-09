import React, { useState } from "react";
import "./genre.css";

const genres = [
  "French", "Disco", "Electro", "Soul", "Goth", "IndiePop", "Emo", "Metal",
  "Trip-Hop", "Breakbeat", "Rock", "Ska", "Death-Metal", "Singer-songwriter", "Alt-Rock", "Ambient",
  "Classical", "Afrobeat", "Funk", "Swedish", "Indian", "Folk", "PowerPop", "Dub",
  "Chicago-House", "House", "Garage", "Grindcore", "Country", "Jazz", "Punk", "Hard-Rock",
  "Pump-Rock", "Spanish", "Techno", "German", "Hip-Hop", "Drum & Bass", "EDM", "Bluegrass"
];

const colors = [
  "#50808e", "#ff729f", "#81f4e1", "#fc8936", "#36213e", "#ffcf56", "#902923", "#353531",
  "#301014", "#ffda22", "#e77728", "#ed217c", "#656256", "#5586", "#820d1c", "#004f2d",
  "#ff9b71", "#edb230", "#824670", "#548687", "#93032e", "#9eb25d", "#ff9f1c", "#301014",
  "#19535f", "#42033d", "#4c596b", "#51291e", "#473335", "#d3b88c", "#6a381f", "#373f47",
  "#363635", "#f58f00", "#007fff", "#774e24", "#ff8552", "#595a4a", "#1affd5", "#4cb963"
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
