import React from 'react'; 
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
function App() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="relative">
        <main className='absolute top-0 left-0 right-0 bottom-0 h-screen w-screen z-10 bg-amber-200'>
            <section className='max-w-6xl mx-auto py-12 mono'>
                <h1 className='text-6xl'>Jordan Ayotte</h1>
                <p className='text-xl'>Full-Stack Web Developer</p>
                <p className='py-12 text-2xl playfair'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, diam at condimentum tempus, nunc nulla scelerisque arcu, posuere scelerisque arcu nisi vitae nisl. Quisque porttitor accumsan fringilla. Nulla at arcu in tortor venenatis malesuada elementum sit amet neque. Maecenas ultricies lorem justo, ut dictum lectus aliquam in. Praesent cursus vel mi nec lacinia. Etiam ullamcorper, lectus nec luctus varius, purus dui rutrum libero, nec vulputate lacus magna suscipit urna. Morbi malesuada eros vel tempor ullamcorper. Praesent imperdiet facilisis viverra. Morbi interdum molestie nibh quis sollicitudin. Quisque augue diam, iaculis a iaculis porttitor, laoreet ac urna. Integer sit amet urna volutpat, porttitor lectus vel, interdum nisl.</p>
            </section>
            <ul className='absolute flex flex-col gap-12 right-0 top-24 px-12 text-4xl underline mono text-red-900'>
              <p>1.Projects</p>
              <p>2.About</p>
              <p>3.Contact</p>
            </ul>
            <section className='max-w-6xl mx-auto mono'>
            <h2 className='text-6xl'>My Projects</h2>
            <ul className='w-full py-12 flex justify-evenly underline'>
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
              <li>Project 4</li>
            </ul>
            </section>
        </main>
        <section className='fixed top-0 left-0 h-full w-64 z-10'>
       <Particles
       className='absolute top-0 h-full w-full'
      id="tsparticles"
      init={particlesInit}
      
      options={{
        "fullScreen": {
            "enable": false,
            "zIndex": 0
        },
        "particles": {
            "number": {
                "value": 23,
                "density": {
                    "enable": false,
                    "value_area": 800
                }
            },
            "color": {
                "value": "random"
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.5,
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
                "opacity": 1,
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
            "color": "#fde68a",
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
