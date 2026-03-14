import '../src/style/index.css'
import Navbar from "./components/navbar.jsx"
import Footer from './components/footer.jsx'
import Itemscompoun from './components/itemscompoun.jsx'
import { useState } from 'react'
function Items({ count,setCount}) {
  return (
    <>
      <Navbar count={count}/>
      <Itemscompoun />
      <div id="contact">
        <Footer />
      </div>
    </>
  )
}
export default Items