import { useState } from 'react'
import AnimatedBackground from './AnimatedBackground';
import './App.css'

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', position: 'relative' }}>
      
      {/* The background component */}
      <AnimatedBackground />

      {/* Your portfolio content goes here */}
      {/* Ensure color is high contrast against the bright background */}
      <main style={{ 
        position: 'relative', 
        zIndex: 1, 
        color: '#000000', 
        padding: '50px' 
      }}>
        <h1>Welcome to My Portfolio</h1>
        <p>This content floats above the animated circles.</p>
      </main>
    </div>
  );
}

export default App;
