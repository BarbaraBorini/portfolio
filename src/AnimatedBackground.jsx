import React from 'react';
import './Background.css';

const AnimatedBackground = () => {
  return (
    <div className="bg-container">
      {/* SVG Filter to force true sRGB color interpolation */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
        <filter id="multiply-srgb" colorInterpolationFilters="sRGB">
          <feBlend mode="multiply" in="SourceGraphic" in2="BackgroundImage" />
        </filter>
      </svg>

      {/* Circle elements */}
      <div className="circle circle-cyan-top" />
      <div className="circle circle-magenta" />
      <div className="circle circle-yellow" />
      <div className="circle circle-cyan" />
    </div>
  );
};

export default AnimatedBackground;