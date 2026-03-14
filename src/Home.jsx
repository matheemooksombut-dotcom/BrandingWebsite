import '../src/style/index.css'
import Headersection from './components/headersection.jsx'
import Navbar from './components/navbar.jsx'
import Branding from './components/branding.jsx'
import Footer from './components/footer.jsx'
import { useState } from 'react'

function Home({ count,setCount}) {
  
  return (
    <>
      <Navbar count={count}/>
      <Headersection />
      <Branding />
      <div id="contact">
        <Footer />
      </div>
    </>
  )
}

export default Home