import React, {useState} from "react";
import Register from "./login-signin/register";
import Login from "./login-signin/login";
import { useNavigate } from "react-router-dom";

import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.jpg";
import image10 from "./images/image10.jpg";
import image11 from "./images/image11.jpg";
import image12 from "./images/image12.jpg";
import image13 from "./images/image13.jpg";
import image14 from "./images/image14.jpg";
import image15 from "./images/image15.jpg";
import image16 from "./images/image16.jpg";

const Before = () =>{
    const images = [
        image1, image2, image3, image4,
        image5, image6, image7, image8,
        image9, image10, image11, image12,
        image13, image14, image15, image16,
        image9, image10
      ];
    
      const [isRegister, setIsRegister] = useState(true); // Initially show Register
      const navigate = useNavigate(); // Hook for navigation
    
      const handleToggle = () => {
        setIsRegister((prev) => !prev); // Toggle between Register and Login
      };
    
      const handleSuccess = () => {
        navigate("/home"); // Redirect after successful login/register
      };
    return(
        <div>
            <div style={styles.grid}>
                {/* Map through images and render them */}
                {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} style={styles.image} />
                ))}
            </div>
            {isRegister ? (
                <Register onToggle={handleToggle} onSuccess={handleSuccess} />
                ) : (
                 <Login onToggle={handleToggle} onSuccess={handleSuccess} />
             )}
        </div>
    );
}

const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",  // 5 columns
      gap: "5px", // space between images
    },
    image: {
      width: "100%", // make images fill the grid cell
      height: "auto", // maintain aspect ratio
      objectfit: "cover",
      borderRadius: "5px", // optional: rounded corners for images
      marginTop: "10px",
      marginBottom: "10px"
    }
  };

export default Before;