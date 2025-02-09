import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

const SliderComponent = () => {
  return (
    <div>
         <div>
        <div 
        style={{
          position: 'absolute',
          right: 300,
          top: '45%', // Adjust top positioning as needed
          transform: 'translateY(-50%)',
          paddingRight: 2, // Optional: adds some padding from the right edge
          paddingLeft: 2,
          fontSize: '16px', // Optional: set font size 
          color: 'white',
        }}
      >
        Danceable
      </div>
        <Box
      sx={{
        width: 300,
        position: 'absolute',
        right: 50,
        top: '50%', // Adjust top positioning as needed
        transform: 'translateY(-50%)', // Centers it vertically
        paddingRight: 2, // Optional: adds some padding from the right edge
        paddingLeft: 2,
        border: '2px solid rgba(128, 128, 128, 0.78)',
        borderRadius: '10px',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
      }}
    >
      <Slider
  aria-label="Dance"
  defaultValue={5}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={1}
  marks
  min={1}
  max={10}
  sx={{
    color: '#bf55cf', // Change slider color (for the track and thumb)
          '& .MuiSlider-thumb': {
            backgroundColor: '#bf55cf', // Change the color of the thumb
    },
    '& .MuiSlider-rail': {
      backgroundColor: '#e0e0e0', // Change the color of the rail (background track)
    },
    '& .MuiSlider-track': {
      backgroundColor: '#bf55cf', // Change the color of the active portion of the track
    }
  }}
/>

    </Box>
    </div>
    <div>
        <div 
        style={{
          position: 'absolute',
          right: 335,
          top: '60%', // Adjust top positioning as needed
          transform: 'translateY(-50%)',
          paddingRight: 2, // Optional: adds some padding from the right edge
          paddingLeft: 2,
          fontSize: '16px', // Optional: set font size 
          color: 'white',
        }}
      >
        Mood
      </div>
        <Box
      sx={{
        width: 300,
        position: 'absolute',
        right: 50,
        top: '65%', // Adjust top positioning as needed
        transform: 'translateY(-50%)', // Centers it vertically
        paddingRight: 2, // Optional: adds some padding from the right edge
        paddingLeft: 2,
        border: '2px solid rgba(128, 128, 128, 0.78)',
        borderRadius: '10px',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
      }}
    >
      <Slider
  aria-label="Dance"
  defaultValue={5}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={1}
  marks
  min={1}
  max={10}
  sx={{
    color: '#bf55cf', // Change slider color (for the track and thumb)
    '& .MuiSlider-thumb': {
      backgroundColor: '#bf55cf', // Change the color of the thumb
    },
    '& .MuiSlider-rail': {
      backgroundColor: '#e0e0e0', // Change the color of the rail (background track)
    },
    '& .MuiSlider-track': {
      backgroundColor: '#bf55cf', // Change the color of the active portion of the track
    }
  }}
/>

    </Box>
    </div>
    <div>
        <div 
        style={{
          position: 'absolute',
          right: 305,
          top: '75%', // Adjust top positioning as needed
          transform: 'translateY(-50%)',
          paddingRight: 2, // Optional: adds some padding from the right edge
          paddingLeft: 2,
          fontSize: '16px', // Optional: set font size 
          color: 'white',
        }}
      >
        Popularity
      </div>
        <Box
      sx={{
        width: 300,
        position: 'absolute',
        right: 50,
        top: '80%', // Adjust top positioning as needed
        transform: 'translateY(-50%)', // Centers it vertically
        paddingRight: 2, // Optional: adds some padding from the right edge
        paddingLeft: 2,
        border: '2px solid rgba(128, 128, 128, 0.78)',
        borderRadius: '10px',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
      }}
    >
      <Slider
  aria-label="Dance"
  defaultValue={5}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={1}
  marks
  min={1}
  max={10}
  sx={{
    color: '#bf55cf', // Change slider color (for the track and thumb)
    '& .MuiSlider-thumb': {
      backgroundColor: '#bf55cf', // Change the color of the thumb
    },
    '& .MuiSlider-rail': {
      backgroundColor: '#e0e0e0', // Change the color of the rail (background track)
    },
    '& .MuiSlider-track': {
      backgroundColor: '#bf55cf', // Change the color of the active portion of the track
    }
  }}
/>

    </Box>
    </div>
    </div>
   
    
  );
}

export default SliderComponent;
