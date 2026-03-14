import { Routes, Route } from "react-router-dom"
import Home from "./Home.jsx"
import Items from "./items.jsx"
import Product1 from "./product-1.jsx"
import Product2 from "./product-2.jsx"
import Product3 from "./product-3.jsx"
import Product4 from "./product-4.jsx"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Items />} />
      <Route path="/product-1" element={<Product1 />} />
      <Route path="/product-2" element={<Product2 />} />
      <Route path="/product-3" element={<Product3 />} />
      <Route path="/product-4" element={<Product4 />} />
    </Routes>
  )
}

export default App