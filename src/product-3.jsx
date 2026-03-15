import '../src/style/index.css'
import Navbar from "./components/navbar.jsx"
import Footer from './components/footer.jsx'
import Productcompount3 from './components/product-3-compount.jsx'

function Product3({ count, setCount, cartItems, setCartItems }) {
  const handleAddToCart = (item) => {
    setCartItems(prev => [...prev, item])
    setCount(prev => prev + 1)
  }

  return (
    <>
      <Navbar count={count} cartItems={cartItems} />
      <Productcompount3 count={count} setCount={setCount} onAddToCart={handleAddToCart} />
      <div id="contact">
        <Footer />
      </div>
    </>
  )
}

export default Product3