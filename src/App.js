import React, { useEffect, useState } from 'react'; 
import AnimatedCursor from 'react-animated-cursor';
import ParticlesBg from './components/ParticlesBg';
import Home from './Home';
function App() {
    
//TODO: IMPLEMENT VINTAGE COLOR THEME
  return (
    <>
    <AnimatedCursor
        color='255, 255, 255'/>
    <ParticlesBg/>
    <Home/>
    </>
  );
}

export default App;
