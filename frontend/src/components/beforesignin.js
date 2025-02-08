import React from "react";
import Register from "./login-signin/register";

import image1 from "./images/image1.png"

const Before = () =>{
    const images = [
        image1, image1, image1, image1, image1,
        image1, image1, image1, image1, image1,
        image1, image1, image1, image1, image1,
        image1, image1, image1, image1, image1
      ];

    return(
        <div>
            <div style={styles.grid}>
                {/* Map through images and render them */}
                {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} style={styles.image} />
                ))}
            </div>
            <Register/>
        </div>
    );
}

const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",  // 5 columns
      gap: "10px", // space between images
      marginBottom: "20px",
    },
    image: {
      width: "100%", // make images fill the grid cell
      height: "auto", // maintain aspect ratio
      borderRadius: "8px", // optional: rounded corners for images
    }
  };

export default Before;