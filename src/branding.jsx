import { useState } from 'react'
import branding1 from './assets/branding1.png'
import branding2 from './assets/branding2.png'
import branding3 from './assets/branding3.png'
import branding4 from './assets/branding4.png'


function Branding() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='branding-font'>แบรนด์</h1>
        <div className='branding-section'>
            <div className="brading-section-1">
                <img src={branding1} alt="" />
            </div>
            <div className="brading-section-2">
                 <img src={branding2} alt="" />
            </div>
            <div className="brading-section-3">
                 <img src={branding3} alt="" />
            </div>
            <div className="brading-section-4">
                 <img src={branding4} alt="" />
            </div>
        </div>
    </>
  )
}

export default Branding
