import React, { useEffect, useState } from 'react'; 
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Nav from './components/Nav';
import AnimatedCursor from 'react-animated-cursor';
function App() {
    const nameString = 'Jordan Ayotte'
    useEffect(() => {}, [
        
    ])
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
    setLoadedName(true)
  };
  const [myName, setMyName] = useState('')
  const [loadedName, setLoadedName] = useState(false)
  function addCharacterToName() {
    let i = myName.length

    setMyName(myName + nameString[i])
  }
  useEffect(() => {
    if(myName !== nameString) {
        setTimeout(() =>{ addCharacterToName()}, 150)
    } if(myName === nameString) {
        setLoadedName(true)
    }
  })
//TODO: IMPLEMENT VINTAGE COLOR THEME
  return (
    <div className="relative">
        <AnimatedCursor
        color='255, 255, 255'/>
        <main className='text-neutral-300 bg-neutral-950 px-4 min-h-screen'>
            <section className='max-w-6xl mx-auto py-10 mono z-20 relative'>
                <h1 className='text-6xl'>{myName}</h1>
                <p className='text-xl'>Full-Stack Web Developer</p>
                <p className='py-10 text-2xl playfair'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, diam at condimentum tempus, nunc nulla scelerisque arcu, posuere scelerisque arcu nisi vitae nisl. Quisque porttitor accumsan fringilla. Nulla at arcu in tortor venenatis malesuada elementum sit amet neque. Maecenas ultricies lorem justo, ut dictum lectus aliquam in. Praesent cursus vel mi nec lacinia. Etiam ullamcorper, lectus nec luctus varius, purus dui rutrum libero, nec vulputate lacus magna suscipit urna. Morbi malesuada eros vel tempor ullamcorper. Praesent imperdiet facilisis viverra. Morbi interdum molestie nibh quis sollicitudin. Quisque augue diam, iaculis a iaculis porttitor, laoreet ac urna. Integer sit amet urna volutpat, porttitor lectus vel, interdum nisl.</p>
            </section>
            <ul className='absolute hidden md:flex flex-col gap-4 right-4 top-4 text-2xl underline mono'>
              <p>1.Projects</p>
              <p>2.About</p>
              <p>3.Contact</p>
            </ul>
            <nav className='fixed top-0 left-0 w-full h-12 z-20'>
            <Nav></Nav>
            </nav>
        </main>
        <section className='fixed top-0 left-0 z-10'>
         <Particles
         className={ nameString.length === myName.length ? 'absolute top-0 h-full w-full opacity-100 transition-opacity duration-1000' : 'opacity-0 duration-1000'}
        id="tsparticles"
        init={particlesInit}
        
        options={{
          "fullScreen": {
              "enable": true,
              "zIndex": 0
          },
          "particles": {
              "number": {
                  "value": 33,
                  "density": {
                      "enable": false,
                      "value_area": 500
                  }
              },
              "color": {
                  "value": "random"
              },
              "shape": {
                  "type": "circle",
              },
              "opacity": {
                  "value": 1,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.4,
                      "sync": false
                  }
              },
              "size": {
                  "value": 3,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                  }
              },
              "rotate": {
                  "value": 0,
                  "random": true,
                  "direction": "clockwise",
                  "animation": {
                      "enable": true,
                      "speed": 2,
                      "sync": false
                  }
              },
              "line_linked": {
                  "enable": true,
                  "distance": 200,
                  "color": "random",
                  "opacity": 0.5,
                  "width": 2
              },
              "move": {
                  "enable": true,
                  "speed": 2,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                  }
              }
          },
          "interactivity": {
              detectsOn: "canvas",
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": ["grab"]
                  },
                  "onclick": {
                      "enable": false,
                      "mode": "bubble"
                  },
                  "resize": true
              },
              "modes": {
                  "grab": {
                      "distance": 400,
                      "line_linked": {
                          "opacity": 1
                      }
                  },
                  "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                  },
                  "repulse": {
                      "distance": 200
                  },
                  "push": {
                      "particles_nb": 4
                  },
                  "remove": {
                      "particles_nb": 2
                  }
              }
          },
          "retina_detect": true,
          "background": {
              "color": "",
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
          }
      }}
      />
      
    </section>
    </div>
  );
}

export default App;
