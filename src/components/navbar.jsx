import { useState } from 'react'
import { Link } from "react-router-dom"



function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='navbar-section'>
            <Link to="/items" className='nav-link'>
              
              <div className='boxitem'>กล่องรายเดือน</div>
            </Link>
            <div className='Contract-us'>ติดต่อ</div>
            <div className='market'>รถเข็น</div>
      </div>
    </>
  )
}

export default Navbar
