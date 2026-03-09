import { useState } from 'react'
import branding1 from './assets/branding1.png'
import branding2 from './assets/branding2.png'
import branding3 from './assets/branding3.png'
import branding4 from './assets/branding4.png'
import box from './assets/box-solid-full.svg'
import cart from './assets/cart-arrow-down-solid-full.svg'
import pay from './assets/amazon-brands-solid-full.svg'




function Branding() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='branding-font'>แบรนด์</h1>
        <div className='branding-section'>
            <div className="brading-section-1">
                <img src={branding1} alt="" />
            </div>
            <div className="brading-section-2">
                 <img src={branding2} alt="" />
            </div>
            <div className="brading-section-3">
                 <img src={branding3} alt="" />
            </div>
            <div className="brading-section-4">
                 <img src={branding4} alt="" />
            </div>
        </div>

      <div className='content-branding'>
        
      </div>


       <h1 className='branding-font'>วิธีการสั่งซื้อ</h1>
        <div className="news-section">
          <div className="news-item">
            <img className="icon-img" src={box} alt="" />
            <p>1. เลือกสินค้าที่ต้องการซื้อ</p>
          </div>

          <div className="news-item">
            <img className="icon-img" src={cart} alt="" />
            <p>2. ใส่สินค้าลงกล่องส่ง</p>
          </div>

          <div className="news-item">
            <img className="icon-img" src={pay} alt="" />
            <p>3. เลือกช่องทางการชำระเงิน</p>
          </div>
        </div>

    </>
  )
}

export default Branding
