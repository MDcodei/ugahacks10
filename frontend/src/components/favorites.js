import React from "react";
import { FaHeart, FaSignOutAlt } from "react-icons/fa"; // Import the icons you need
import { useNavigate } from "react-router-dom";
import backgroundImage from "./images/background.jpg";
import { useState } from "react";
import Card  from "./favoritesCard.js";
import './favoritesCard.css';

const  Favorites = () => {
    const [hoveredLogout, setHoveredLogout] = useState(false);
    
      const navigate = useNavigate();
    
      const handleLogout = ()=>{
        navigate("/");
      }
    return (
        <div>
            <div>
            <header style={styles.header}>
                <h3 className="neon-border" style={styles.h3}>thePlaylist8</h3>
                <div style={styles.iconContainer}>
                <div
                    style={{
                    ...styles.iconWrapper,
                    backgroundColor:  "#bf55cf", // Change to purple on hover for heart
                    }}
                >
                    <FaHeart style={styles.icon} />
                </div>
                <div
                    style={{
                    ...styles.iconWrapper,
                    backgroundColor: hoveredLogout ? "#bf55cf" : "black", // Change to purple on hover for logout
                    }}
                    onMouseEnter={() => setHoveredLogout(true)} // Hover effect for logout icon
                    onMouseLeave={() => setHoveredLogout(false)} // Reset hover effect for logout icon
                    onClick={handleLogout}
                >
                    <FaSignOutAlt style={styles.icon} />
                </div>
                </div>
            </header>
            </div>
            <div className="cards-container">
                <Card />
                <Card />
            </div>
        </div>
    );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "right", // This ensures the icons are on the right and the h3 is centered
    alignItems: "center",
    padding: "10px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative", // Add this to help with centering
    height: "80px"
  },
  h3: {
    color: "white",
    textAlign: "center",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "38px",
    fontWeight: "400",
    margin: 0, // Ensure there's no extra margin
    padding: "5px 10px", // Adjust padding to control the size
    position: "absolute", // Position the h3 absolutely within the header
    left: "50%", // Move the h3 to the center horizontally
    transform: "translateX(-50%)", // Adjust for the h3's own width
  },
  iconContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "20px", // Adds space between the buttons
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
    color: "white", // Icon color
    fontSize: "24px", // Icon size
    cursor: "pointer",
  },
};

export default Favorites;