import { Routes, Route } from "react-router-dom"
import Home from "./Home.jsx"
import Items from "./items.jsx"
import Product1 from "./product-1.jsx"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Items />} />
      <Route path="/product-1" element={<Product1 />} />
    </Routes>
  )
}

export default App