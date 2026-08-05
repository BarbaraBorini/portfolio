import React from 'react';
import './Background.css'; // Import the updated CSS

const AnimatedBackground = () => {
  return (
    <div className="bg-container">
      {/* The layering order matters for slight tonal shifts, 
          though multiply is commutative. */}
     <div className="circle circle-cyan-top" />
      <div className="circle circle-magenta" />
      <div className="circle circle-yellow" />
      <div className="circle circle-cyan" />
    </div>
  );
};

export default AnimatedBackground;