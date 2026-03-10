import { useState } from 'react'



function Branding() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='branding-font'>แบรนด์</h1>
        <div className='branding-section'>
            <div className="brading-section-1">
                <img src='../public/branding1.png'  alt="" />
            </div>
            <div className="brading-section-2">
                 <img src='../public/branding2.png' alt="" />
            </div>
            <div className="brading-section-3">
                 <img src='../public/branding3.png' alt="" />
            </div>
            <div className="brading-section-4">
                 <img src='../public/branding4.png' alt="" />
            </div>
        </div>

      <div className='content-branding'>
        <div className='showimg-1'>
          <img src='../public/Showimg-1.jpg' alt="" />
          <h2>Check skin health</h2>
        </div>

         <div className='showimg-2'>
          <img src='../public/Showimg-2.jpg' alt="" />
          <h2>Skin Care</h2>
        </div>


         <div className='showimg-3'>
          <img src='../public/Showimg-3.jpg' alt="" />
          <h2>Serum</h2>
        </div>
      </div>


       <h1 className='branding-font'>วิธีการสั่งซื้อ</h1>
        <div className="news-section">
          <div className="news-item">
            <img className="icon-img" src='../public/box-solid-full.svg' alt="" />
            <p>1. เลือกสินค้าที่ต้องการซื้อ</p>
          </div>

          <div className="news-item">
            <img className="icon-img" src='../public/cart-arrow-down-solid-full.svg' alt="" />
            <p>2. ใส่สินค้าลงกล่องส่ง</p>
          </div>

          <div className="news-item">
            <img className="icon-img" src='../public/amazon-brands-solid-full.svg' alt="" />
            <p>3. เลือกช่องทางการชำระเงิน</p>
          </div>
        </div>

    </>
  )
}

export default Branding
