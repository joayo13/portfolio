import React, { useEffect, useState } from 'react'
import billysbarber from './images/billysbarber.png'
import coffeecat from './images/coffeecat.png'
import findnearestcafe from './images/findnearestcafe.png'
import billysbarbermobile from './images/billysbarbermobile.png'
import coffeecatmobile from './images/coffeecatmobile.png'
import findnearestcafemobile from './images/findnearestcafemobile.png'
import gmail from './images/gmail.png'
import linkedin from './images/linkedin.png'
import github from './images/github.png'


function Home() {
   useEffect(() => {
   if(document.body.clientWidth < 768) {
    setMobile(true)
   } 
  },[])
  const nameString = 'Jordan Ayotte'
  const [myName, setMyName] = useState('')
  const [loadedName, setLoadedName] = useState(false)
  const [mobile, setMobile] = useState(false)
  function addCharacterToName() {
    let i = myName.length
    setMyName(myName + nameString[i])
  }
  useEffect(() => {
    if(myName !== nameString) {
        setTimeout(() =>{ addCharacterToName()}, 100)
    } if(myName === nameString) {
        setTimeout(() => {setLoadedName(true)}, 500)
        
    }
  },[myName])
  return (
    <div className="relative">
        <main className='text-neutral-300 bg-neutral-950 px-4 min-h-screen'>
            <section className='max-w-6xl mx-auto py-10 mono z-20 relative'>
                <div className='flex gap-1 flex-wrap'>
                <h1 className='text-6xl py-4'>{myName}
                <span className='text-6xl flicker-text'>|</span></h1>
                
                </div>
                <div style={loadedName ? {animation: 'fade-in 0.5s forwards'} : null} className='opacity-0'>
                <p className='text-xl text-green-700'>Full-Stack Web Developer</p>
                <span className='flex gap-4 py-4 items-center'>
                  <a href='mailto:jordan.ayotte1999@gmail.com'>
                    <img className='w-8 h-8' src={gmail}></img>
                  </a>
                  <a href='https://www.linkedin.com/in/jordan-a-b90747211'>
                    <img className='w-8 h-7' src={linkedin}></img>
                  </a>
                  <a href='https://www.github.com/joayo13'>
                    <img className='w-8 h-8' src={github}></img>
                  </a>
                </span>
                <p className='pt-10 text-2xl'>I provide eye-catching designs and applications that are dependable, accessible and able to scale. I'm always learning and like to stay up to date with the newest technologies and designs. You can be sure that your ideas will be translated into something visually stunning and memorable. Let me help you get your business a great first impression.</p>
                </div>
            </section>
            <section style={loadedName ? {animation: 'fade-in 0.5s forwards 300ms'} : null} className='max-w-6xl opacity-0 mx-auto mono z-20 relative'>
            <h1 className='text-6xl py-4'>Projects</h1>
            <ul className='flex flex-col gap-4'>
              <span>
                <h2 className='text-green-700 pb-4 text-xl'>1. Billy's Barber</h2>
                <a href='https://billysbarber.netlify.app' className='underline text-xl pr-4'>Live Demo</a>
                <a href='https://github.com/joayo13/barbershop' className='underline text-xl'>Source Code</a>
              </span>
              
              <p>Billy's Barber is a classy and stylish reservation website built with React.</p>
              <img src={mobile ? billysbarbermobile : billysbarber}></img>
              <span>
                <h2 className='text-green-700 pb-4 text-xl'>2. Coffee Cat</h2>
                <a href='https://coffeecat.netlify.app' className='underline pr-4 text-xl'>Live Demo</a>
                <a href='https://github.com/joayo13/coffeecat' className='underline text-xl'>Source Code</a>
              </span>
              <p>Coffee Cat is a modern and stylish e-commerce site built with React, Node.js/Express, integrated with the Stripe API for secure payments, and designed using Tailwind CSS.</p>
              <img src={mobile ? coffeecatmobile: coffeecat}></img>
              <span>
                <h2 className='text-green-700 pb-4 text-xl'>3. Find Nearest Cafe</h2>
                <a href='https://findnearestcafe.netlify.app' className='underline pr-4 text-xl'>Live Demo</a>
                <a href='https://github.com/joayo13/findnearestcafe' className='underline text-xl'>Source Code</a>
              </span>
              <p>Find Nearest Cafe is built with React and uses Google Maps API To find the highest rated coffee shop near the user.</p>
              <img src={mobile ? findnearestcafemobile: findnearestcafe}></img>
            </ul>
            </section>
        </main>
        <footer className='h-16 w-full bg-neutral-950 px-4 py-8'>
          <h2 className='text-green-700 mono text-xs font-bold text-center'>Thanks For Visiting, Have A Good One ✌️</h2>
        </footer>
    </div>
  )
}

export default Home