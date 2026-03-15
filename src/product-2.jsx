import '../src/style/index.css'
import Navbar from "./components/navbar.jsx"
import Footer from './components/footer.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Productcompount2 from './components/product-2-compount.jsx'
function Product2({ count,setCount}) {
const [detailText, setDetailText] = useState("");
const [selected, setSelected] = useState("");

  return (
    <>
      <Navbar count={count} />
      <Productcompount2 count={count} setCount={setCount} />      
        <div id="contact">
          <Footer />
        </div>





    </>
  )
}
export default Product2