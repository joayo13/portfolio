import React, { useEffect, useState } from 'react'
import { loadFull } from 'tsparticles';
import Particles from "react-tsparticles";

function ParticlesBg() {
    const [particleAmount, setParticleAmount] = useState(33)
    useEffect(() => {
        if(document.body.clientWidth < 768) {
            setParticleAmount(13)
            return
        } else {
          setParticleAmount(33)
        }
    },[])
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
  return (
    <section className='fixed top-0 left-0 z-10'>
         <Particles
        id="tsparticles"
        init={particlesInit}
        
        options={{
          "fullScreen": {
              "enable": true,
              "zIndex": 0
          },
          "particles": {
              "number": {
                  "value": particleAmount,
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
  )
}

export default ParticlesBg