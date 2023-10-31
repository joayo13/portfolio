import React, { useEffect, useState } from 'react'
import billysbarber from './images/billysbarber.png'
import coffeecat from './images/coffeecat.png'
import billysbarbermobile from './images/billysbarbermobile.png'
import coffeecatmobile from './images/coffeecatmobile.png'

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
    if(i === 0) {
        setTimeout(() => {setMyName(myName + nameString[i])}, 500)
        return
    }
    setMyName(myName + nameString[i])
  }
  useEffect(() => {
    if(myName !== nameString) {
        setTimeout(() =>{ addCharacterToName()}, 100)
    } if(myName === nameString) {
        setTimeout(() => {setLoadedName(true)}, 500)
        
    }
  })
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
                <p className='pt-10 text-2xl'>I provide eye-catching designs and dependable applications. I'm always learning and like to stay up to date with the newest technologies. You can be sure that your ideas will be translated into something visually stunning and memorable. Let me help you get your business the attention it deserves.</p>
                </div>
            </section>
            <section style={loadedName ? {animation: 'fade-in 0.5s forwards 300ms'} : null} className='max-w-6xl opacity-0 mx-auto mono z-20 relative'>
            <h1 className='text-6xl py-4'>Projects</h1>
            <ul className='flex flex-col gap-4'>
              <span>
                <h2 className='text-green-700 pb-4'>1. Billy's Barber</h2>
                <a href='https://billysbarber.netlify.app' className='underline pr-4'>Live Demo</a>
                <a href='https://github.com/joayo13/barbershop' className='underline'>Source Code</a>
              </span>
              
              <p>Billy's Barber is a classy and stylish reservation website built with React.</p>
              <img src={mobile ? billysbarbermobile : billysbarber}></img>
              <span>
                <h2 className='text-green-700 pb-4'>2. Coffee Cat</h2>
                <a href='https://coffeecat.netlify.app' className='underline pr-4'>Live Demo</a>
                <a href='https://github.com/joayo13/coffeecat' className='underline'>Source Code</a>
              </span>
              <p>Coffee Cat is a modern and stylish e-commerce site built with React, Node.js/Express, integrated with the Stripe API for secure payments, and designed using Tailwind CSS.</p>
              <img src={mobile ? coffeecatmobile: coffeecat}></img>
            </ul>
            </section>
        </main>
        
    </div>
  )
}

export default Home