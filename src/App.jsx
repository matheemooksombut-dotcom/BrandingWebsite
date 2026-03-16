import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./Home.jsx"
import Items from "./items.jsx"
import Product1 from "./product-1.jsx"
import Product2 from "./product-2.jsx"
import Product3 from "./product-3.jsx"
import Product4 from "./product-4.jsx"


function App() {
  const [count, setCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  const handleRemoveCartItem = (removeIndex) => {
    setCartItems((prev) => prev.filter((_, index) => index !== removeIndex))
    setCount((prev) => Math.max(0, prev - 1))
  }
  return (
    <Routes>
      <Route path="/" element={<Home count={count} cartItems={cartItems} onRemoveItem={handleRemoveCartItem} />} />
      <Route path="/items" element={<Items count={count} cartItems={cartItems} onRemoveItem={handleRemoveCartItem} />} />
      <Route path="/product-1" element={<Product1 count={count} setCount={setCount} cartItems={cartItems} setCartItems={setCartItems} onRemoveItem={handleRemoveCartItem} />} />
      <Route path="/product-2" element={<Product2 count={count} setCount={setCount} cartItems={cartItems} setCartItems={setCartItems} onRemoveItem={handleRemoveCartItem} />} />
      <Route path="/product-3" element={<Product3 count={count} setCount={setCount} cartItems={cartItems} setCartItems={setCartItems} onRemoveItem={handleRemoveCartItem} />} />
      <Route path="/product-4" element={<Product4 count={count} setCount={setCount} cartItems={cartItems} setCartItems={setCartItems} onRemoveItem={handleRemoveCartItem} />} />
    </Routes>
  )
}

export default App