import '../src/style/index.css'
import Headersection from './components/headersection.jsx'
import Navbar from './components/navbar.jsx'
import Branding from './components/branding.jsx'
import Footer from './components/footer.jsx'

function Home({ count, cartItems, onRemoveItem }) {
  return (
    <>
      <Navbar count={count} cartItems={cartItems} onRemoveItem={onRemoveItem} />
      <Headersection />
      <Branding />
      <div id="contact">
        <Footer />
      </div>
    </>
  )
}

export default Home