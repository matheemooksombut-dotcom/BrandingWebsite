import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='footerwraper'>
            <div className='content-footer'>
                
                <ul className='foot-1'>
                    <h1>ร้านค้า</h1>
                    <br />
                    <h3><li>กล่องรายเดือน</li></h3>
                    <h3><li>การจัดส่ง</li></h3>
                    <h3><li>นโยบายของร้าน</li></h3>
                    <h3><li>ช่องทางการชำระเงิน</li></h3>
                
                </ul>

                <ul className='foot-2'>
                    <h1 style={{ textAlign: "center" }}>รับจดหมายข่าว</h1>
                    <br />
                    สมัครรับข่าวอัปเดต โปรโมชันสมาชิก และการแจ้งเตือนเมื่อมีกล่องสินค้าแบบลิมิเต็ดอิดิชัน
                    <div className='icon-info'>
                        
                           <li>
                                <FontAwesomeIcon icon={faInstagram} size='3x' />
                            </li>
                             <li>
                                 <FontAwesomeIcon icon={faFacebook} size="3x" />
                            </li>
                             <li>
                               <FontAwesomeIcon icon={faTwitter} size="3x" />
                            </li>
                        
                    </div>
                </ul>


                <ul className='foot-3'>
                    <h1>ติดต่อเรา</h1>
                    <br />
                    <h3><li>192 ถ.วิทยุ ลุมพินี ปทุมวัน</li></h3>
                    <h3><li>กทม. 10330</li></h3>
                    <h3><li>info@mysite.com</li></h3>
                    <h3><li>02-123-4567</li></h3>
                
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer
