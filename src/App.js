import React, { useEffect, useState } from 'react'; 
import AnimatedCursor from 'react-animated-cursor';
import ParticlesBg from './components/ParticlesBg';
import Home from './Home';
function App() {
    
//TODO: IMPLEMENT VINTAGE COLOR THEME
  return (
    <div className='relative'>
    <AnimatedCursor
        color='255, 255, 255'
        clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}/>
    <ParticlesBg/>
    <Home/>
    </div>
  );
}

export default App;
