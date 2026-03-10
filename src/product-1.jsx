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
                <p>11</p>
              </div>
              
          </div>
      </div>
      
      
        <div id="contact">
          <Footer />
        </div>





    </>
  )
}
export default Product1