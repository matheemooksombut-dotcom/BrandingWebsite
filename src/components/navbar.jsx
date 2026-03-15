import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar({ count }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className='navbar-section'>
        <Link to="/" className='nav-link'>
          <div className='boxitem'>หน้าร้านค้า</div>
        </Link>
        <Link to="/items" className='nav-link'>
          <div className='boxitem'>กล่องรายเดือน</div>
        </Link>
        <div className='Contract-us' onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }}>ติดต่อ</div>
        <div className='market' onClick={() => setSidebarOpen(true)}>
          รถเข็น ({count})
        </div>
      </div>

      {/* overlay เมื่อเปิด sidebar */}
      {sidebarOpen && (
        <div
          className='cart-sidebar-overlay'
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* sidebar ด้านขวา */}
      <aside className={`cart-sidebar ${sidebarOpen ? 'cart-sidebar-open' : ''}`}>
        <div className='cart-sidebar-header'>
          <h3>รถเข็น ({count})</h3>
          <button
            type="button"
            className='cart-sidebar-close'
            onClick={() => setSidebarOpen(false)}
            aria-label="ปิด"
          >
            ×
          </button>
        </div>
        <div className='cart-sidebar-body'>
          {count === 0 ? (
            <p className='cart-sidebar-empty'>ยังไม่มีสินค้าในตะกร้า</p>
          ) : (
            <p className='cart-sidebar-hint'>มี {count} รายการในตะกร้า</p>
          )}
        </div>
      </aside>
    </>
  )
}

export default Navbar
