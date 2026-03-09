import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='navbar-section'>
            <div className='boxitem'>กล่องรายเดือน</div>
            <div className='Contract-us'>ติดต่อ</div>
            <div className='Contract-us'>รถเข็น</div>
      </div>
    </>
  )
}

export default Navbar
