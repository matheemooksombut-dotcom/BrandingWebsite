import { Routes, Route } from "react-router-dom"
import Home from "./Home.jsx"
import Items from "./items.jsx"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Items />} />
    </Routes>
  )
}

export default App