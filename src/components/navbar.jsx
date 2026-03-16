import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar({ count, cartItems = [], onRemoveItem }) {
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
          {cartItems.length === 0 ? (
            <p className='cart-sidebar-empty'>ยังไม่มีสินค้าในตะกร้า</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                  {/* รูปจาก PRODUCT */}
              {item.imageSrc && (
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  className="cart-item-image"
                />
              )}
               {/* ข้อมูลจาก PRODUCT */}
              <p>{item.name}</p>
              <p>SKU: {item.sku}</p>   
              {/* ข้อมูล option ที่เลือก */}
              <p>{item.optionLabel}</p>
              <p>{item.price}</p>
              {item.interval && <p>{item.interval}</p>}
              <button className="btn-deleated-style"
                type="button"
                onClick={() => onRemoveItem?.(index)}
                disabled={!onRemoveItem}
              >
                ลบรายการ
              </button>
              </div>
              
          ))
            
          )}
        </div>
        
      </aside>
    </>
  )
}

export default Navbar
