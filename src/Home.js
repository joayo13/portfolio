import React, { useEffect, useState } from 'react'

function Home() {
    const nameString = 'Jordan Ayotte'
    useEffect(() => {}, [
        
    ])
  
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
        setTimeout(() =>{ addCharacterToName()}, 150)
    } if(myName === nameString) {
        setLoadedName(true)
    }
  })
  return (
    <div className="relative">
        <main className='text-neutral-300 bg-neutral-950 px-4 min-h-screen'>
            <section className='max-w-6xl mx-auto py-10 mono z-20 relative'>
                <div className='flex gap-1 flex-wrap'>
                <h1 className='text-6xl'>{myName}
                <span className='text-6xl flicker-text'>|</span></h1>
                
                </div>
                <div style={loadedName ? {animation: 'fade-in 2s forwards'} : null} className='opacity-0'>
                <p className='text-xl'>Full-Stack Web Developer</p>
                <p className='py-10 text-2xl playfair'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue, diam at condimentum tempus, nunc nulla scelerisque arcu, posuere scelerisque arcu nisi vitae nisl. Quisque porttitor accumsan fringilla. Nulla at arcu in tortor venenatis malesuada elementum sit amet neque. Maecenas ultricies lorem justo, ut dictum lectus aliquam in. Praesent cursus vel mi nec lacinia. Etiam ullamcorper, lectus nec luctus varius, purus dui rutrum libero, nec vulputate lacus magna suscipit urna. Morbi malesuada eros vel tempor ullamcorper. Praesent imperdiet facilisis viverra. Morbi interdum molestie nibh quis sollicitudin. Quisque augue diam, iaculis a iaculis porttitor, laoreet ac urna. Integer sit amet urna volutpat, porttitor lectus vel, interdum nisl.</p>
                </div>
            </section>
            <ul className='absolute hidden md:flex flex-col gap-4 right-4 top-4 text-2xl underline mono'>
              <p>1.Projects</p>
              <p>2.About</p>
              <p>3.Contact</p>
            </ul>
            <nav className='fixed top-0 left-0 w-full h-12 z-20'>
            </nav>
        </main>
        
    </div>
  )
}

export default Home