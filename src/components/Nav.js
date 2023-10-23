import React, { useState } from 'react'

function Nav() {
    const [mobileMenuShowing, setMobileMenuShowing] = useState(false)
    const [mobileMenuActive, setMobileMenuActive] = useState(false)
  return (
    <button onClick={() => { setMobileMenuActive(!mobileMenuActive); setMobileMenuShowing(true)}}>
        <div className="hb w-8 h-8 top-2 right-2 md:hidden">
          {mobileMenuShowing ? 
          <><div style={ mobileMenuActive ? {animation: 'hb1 0.3s linear forwards'} : {animation: 'hb1r 0.3s linear forwards'}} className="hb1"></div>
          <div style={ mobileMenuActive ? {animation: 'hb2 0.15s linear forwards'} : {animation: 'hb2r 0.15s linear forwards'}} className="hb2"></div>
          <div style={ mobileMenuActive ? {animation: 'hb3 0.3s linear forwards'} : {animation: 'hb3r 0.3s linear forwards'}} className="hb3"></div></>
          : <><div className="hb1"></div>
          <div className="hb2"></div>
          <div className="hb3"></div></>}
          
        </div>
        </button>
  )
}

export default Nav