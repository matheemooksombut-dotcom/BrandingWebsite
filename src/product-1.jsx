import '../src/style/index.css'
import Navbar from "./components/navbar.jsx"
import Footer from './components/footer.jsx'
import Productcompount1 from './components/product-1-compount.jsx';
import { useState } from 'react'
function Product1({ count,setCount}) {
const [detailText, setDetailText] = useState("");
const [selected, setSelected] = useState("");

 return (
    <>
      <Navbar count={count}/>
      <Productcompount1 count={count} setCount={setCount} />
      <div id="contact">
          <Footer />
      </div>





    </>
  )
}
export default Product1