import '../src/style/index.css'
import Navbar from "./components/navbar.jsx"
import Footer from './components/footer.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Product3() {
const [detailText, setDetailText] = useState("");
const [selected, setSelected] = useState("");
  return (
    <>
      <Navbar />

     <div className="flex-product">
          <div className="Product1-section">

            <div className="Product1-img">
                <img src="../../public/box3.png" alt="" />
            </div>
          </div>

      </div> 

      
      <div className='box-products-wrapper'>
          <div className="content-box-products">
              <div className='Content-product'>
                <h2>กล่องประจำเดือน</h2>
                <p>SKU:001</p>
                <p>นี่คือคำอธิบายสินค้า ที่ตรงนี้เหมาะอย่างยิ่งสำหรับ “ขาย” สินค้าของคุณและดึงดูดความสนใจของผู้ซื้อ อธิบายสินค้าของคุณอย่างกระชับและชัดเจน ใช้คีย์เวิร์ดเฉพาะ เขียนคำอธิบายของคุณเองแทนที่จะใช้คำโฆษณาจากผู้ผลิต</p>
                <br />
                
              
                <div className='Data-product'>
                    <b><p className='details-productive1' onClick={()=> setDetailText("นี่คือข้อมูลสินค้า  ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus voluptate eos consequuntur repellat esse dolorum. Sequi similique impedit nobis.")}>ข้อมูลสินค้า</p>
                    
                   
                    </b>
                   <b> <p className='details-productive2' onClick={()=>setDetailText("นี้คือนโยบาย  ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus voluptate eos consequuntur repellat esse dolorum. Sequi similique impedit nobis.")}>นโยบายสินค้า</p></b>
                   <b> <p className='details-productive3' onClick={()=>setDetailText("นี้คือข้อมูลการจัดส่ง  ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus voluptate eos consequuntur repellat esse dolorum. Sequi similique impedit nobis.")}>ข้อมูลการจัดส่ง</p></b>
                  
                </div>
                 <br />
                   <p>{detailText}</p>
              </div>
          </div>
          <br />

          <div className='Details-Products'>
              <h2>฿1,500.00</h2>
              <p>รายการราคา *</p>
              <label className="price-box">

                  <div className='option-1'>
                    <input type='radio' name='price' value="once" checked={selected ==="once"}
                    onChange={(e) =>  setSelected(e.target.value)} />
                    <br />
                      <div>
                  <div>ซื้อแบบครั้งเดียว</div>
                    <div className="price">฿1,500.00</div>
                  </div>

                    
                </div>
               
                <div className='option-2'>
                  <input type='radio' name='price' value="3month" checked={selected===("3month")}
                  onChange={(e) =>  setSelected(e.target.value)} />
                  <br />
                    <div>
                <div>3 เดือน</div>
                
                  <div className="price">฿1,500.00
                    
                    <br /><span>ทุกๆ 3 เดือน</span>
                  </div>
                  
                </div>

                  
                </div>

                <div className='option-3'>
                  <input type='radio' name='price' value="6month" checked={selected==="6month"}
                  onChange={(e) => setSelected(e.target.value)} />
                  <br />
                    <div>
                <div>6 เดือน </div>
                  <div className="price">฿1,500.00
                    <br /><span>  ทุกๆ 6 เดือน</span></div>
                </div>

                  
                </div>
               
              </label>
          </div>
      </div>
      
      
        <div id="contact">
          <Footer />
        </div>





    </>
  )
}
export default Product3