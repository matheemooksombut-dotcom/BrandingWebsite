import '../src/style/index.css'
import Navbar from "./components/navbar.jsx"
import Footer from './components/footer.jsx'
import Itemscompoun from './components/itemscompoun.jsx'

function Items({ count, cartItems }) {
  return (
    <>
      <Navbar count={count} cartItems={cartItems} />
      <Itemscompoun />
      <div id="contact">
        <Footer />
      </div>
    </>
  )
}

export default Items