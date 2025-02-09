import React, { useState } from "react";
import { FaHeart, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Location from "./home/location.js";
import SliderComponent from "./home/other_features.js";
import Genre from "./home/genre.js"; // Import the Genre component
import backgroundImage from "./images/background.jpg";
import './home.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from "./favoritesCard"; // Import the favorites card

const Home = () => {
  const [hoveredHeart, setHoveredHeart] = useState(false);
  const [hoveredLogout, setHoveredLogout] = useState(false);
  const [confirmedCountry, setConfirmedCountry] = useState(""); // Only update when Enter is pressed
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();

  const handleHeartClick = () => navigate("/favorites");
  const handleLogout = () => navigate("/");

  const handleGenerateClick = () => {
    setIsModalOpen(true); // Open modal on Generate button click
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div>
      <header style={styles.header}>
        <h3 className="neon-border" style={styles.h3}>thePlaylist8</h3>
        <div style={styles.iconContainer}>
          <div
            style={{
              ...styles.iconWrapper,
              backgroundColor: hoveredHeart ? "#bf55cf" : "black",
            }}
            onMouseEnter={() => setHoveredHeart(true)}
            onMouseLeave={() => setHoveredHeart(false)}
            onClick={handleHeartClick}
          >
            <FaHeart style={styles.icon} />
          </div>
          <div
            style={{
              ...styles.iconWrapper,
              backgroundColor: hoveredLogout ? "#bf55cf" : "black",
            }}
            onMouseEnter={() => setHoveredLogout(true)}
            onMouseLeave={() => setHoveredLogout(false)}
            onClick={handleLogout}
          >
            <FaSignOutAlt style={styles.icon} />
          </div>
        </div>
      </header>

      {/* Pass setConfirmedCountry to Location */}
      <Location setConfirmedCountry={setConfirmedCountry} />

      {/* Conditionally render Genre, Slider, and Button only when Enter is pressed */}
      {confirmedCountry && (
        <>
          <div className="content-container">
            <div className="genre-section">
              <Genre />
            </div>
            <div className="slider-section">
              <SliderComponent />
            </div>
          </div>
          <div className="centered-container">
            <Stack spacing={2} direction="row">
              <Button
                variant="outlined"
                className="generate-button"
                onClick={handleGenerateClick} // Open the modal on click
              >
                Generate
              </Button>
            </Stack>
          </div>
        </>
      )}

      {/* Modal for the Favorites Card */}
      {isModalOpen && (
        <div>
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Card /> 
            <Button variant="outlined" onClick={handleCloseModal}>Favorite</Button>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "right",
    alignItems: "center",
    padding: "10px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    height: "80px",
  },
  h3: {
    color: "white",
    textAlign: "center",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "38px",
    fontWeight: "400",
    margin: 0,
    padding: "5px 10px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "20px",
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "black",
    border: "2px solid white",
    transition: "background-color 0.3s ease",
  },
  icon: {
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
  },
};

export default Home;
