
import { Link } from "react-router-dom"

function Navbar({count}) {


  

  

  return (
    <>
      <div className='navbar-section'>
            <Link to="/" className='nav-link'>
              
              <div className='boxitem'>หน้าร้านค้า</div>
            </Link>
            <Link to="/items" className='nav-link'>
              
              <div className='boxitem'>กล่องรายเดือน</div>
            </Link>
            <div className='Contract-us' onClick={()=>{
              document.getElementById("contact").scrollIntoView({behavior:"smooth"})
            }}>ติดต่อ</div>
           <div className='market'>
                รถเข็น ({count})
            </div>

      </div>
    </>
  )
}

export default Navbar
