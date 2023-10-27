import React, { useEffect, useState } from 'react'
import billysbarber from './images/billysbarber.png'
import coffeecat from './images/coffeecat.png'

function Home() {
  const nameString = 'Jordan Ayotte'
  const [myName, setMyName] = useState('')
  const [loadedName, setLoadedName] = useState(false)
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
                <p className='py-10 text-2xl playfair'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, diam at condimentum tempus, nunc nulla scelerisque arcu, posuere scelerisque arcu nisi vitae nisl. Quisque porttitor accumsan fringilla. Nulla at arcu in tortor venenatis malesuada elementum sit amet neque. Maecenas ultricies lorem justo, ut dictum lectus aliquam in. Praesent cursus vel mi nec lacinia. Etiam ullamcorper, lectus nec luctus varius, purus dui rutrum libero, nec vulputate lacus magna suscipit urna. Morbi malesuada eros vel tempor ullamcorper. Praesent imperdiet facilisis viverra. Morbi interdum molestie nibh quis sollicitudin. Quisque augue diam, iaculis a iaculis porttitor, laoreet ac urna. Integer sit amet urna volutpat, porttitor lectus vel, interdum nisl.</p>
                </div>
            </section>
            <section style={loadedName ? {animation: 'fade-in 0.5s forwards 300ms'} : null} className='max-w-6xl opacity-0 mx-auto py-10 mono z-20 relative'>
            <h1 className='text-6xl py-4'>Projects</h1>
            <ul className='flex flex-col gap-4'>
              <h2>1. Billy's Barber</h2>
              <img src={billysbarber}></img>
              <h2>2. Coffee Cat</h2>
              <img src={coffeecat}></img>
            </ul>
            </section>
        </main>
        
    </div>
  )
}

export default Home