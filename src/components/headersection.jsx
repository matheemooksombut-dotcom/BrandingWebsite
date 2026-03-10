import { useState } from 'react'



function Headersection() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='headersection'>
        <div className='Content-section'>
          <h1>คัดสรรสินค้าลงกล่องส่งถึงบ้านคุณ</h1>
          <p>นี่คือเนื้อหา คลิกที่นี่เพื่อเพิ่มข้อความของคุณและแก้ไข แนะนำตัวให้ผู้ใช้รู้จักคุณ</p>
          <button className='btn-getproductive'>เลือกซื้อกล่องสินค้า</button>
        </div>
      </div>
    </>
  )
}

export default Headersection
