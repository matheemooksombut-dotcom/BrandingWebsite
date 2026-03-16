import '../src/style/index.css'
import Navbar from "./components/navbar.jsx"
import Footer from './components/footer.jsx'
import Productcompount2 from './components/product-2-compount.jsx'

function Product2({ count, setCount, cartItems, setCartItems, onRemoveItem }) {
  const handleAddToCart = (item) => {
    setCartItems(prev => [...prev, item])
    setCount(prev => prev + 1)
  }

  return (
    <>
      <Navbar count={count} cartItems={cartItems} onRemoveItem={onRemoveItem} />
      <Productcompount2 count={count} setCount={setCount} onAddToCart={handleAddToCart} />
      <div id="contact">
        <Footer />
      </div>
    </>
  )
}

export default Product2