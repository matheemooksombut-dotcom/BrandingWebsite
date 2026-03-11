import '../src/style/index.css'
import Navbar from "./components/navbar.jsx"
import Footer from './components/footer.jsx'
function Product1() {
  return (
    <>
      <Navbar />

     <div className="flex-product">
          <div className="Product1-section">

            <div className="Product1-img">
                <img src="../../public/box-1.png" alt="" />
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
                    <b><p>ข้อมูลสินค้า</p></b>
                   <b> <p>นโยบายสินค้า</p></b>
                   <b> <p>ข้อมูลการจัดส่ง</p></b>
                </div>
              </div>
          </div>
          <br />
          
        </div>
      
      
        <div id="contact">
          <Footer />
        </div>





    </>
  )
}
export default Product1