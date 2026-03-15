import '../src/style/index.css'
import Navbar from "./components/navbar.jsx"
import Footer from './components/footer.jsx'
import { useState } from 'react'
import Productcompount4 from './components/product-3-compount.jsx'
function Product4({ count,setCount}) {
const [detailText, setDetailText] = useState("");
const [selected, setSelected] = useState("");

  return (
    <>
      <Navbar count={count} />
      <Productcompount4 count={count} setCount={setCount} />      
        <div id="contact">
          <Footer />
        </div>
      
        <div id="contact">
          <Footer />
        </div>





    </>
  )
}
export default Product4