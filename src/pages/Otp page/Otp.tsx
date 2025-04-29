import { useState } from 'react';
import '../../index.css'
import './otp.css'
const Otp = () => {

 const [otp, setOtp] = useState(new Array(5).fill(""))
 return(
  <div className='otp-container'>
  <div className="otp-logo">
   <img src="src\assets\images\icons\logo-main.svg"  alt="" />
  </div>

  <div className="otp-heading">
   <h1>Verify your Number</h1>
   <p>We have sent a 5-digit code to your phone number</p>
  </div>

  <div className='otp-area' >
   {
    otp.map((data, index)=>{
      return <input type='text'/>
    })
   }
  
   
  </div>
  <p className='otp-countdown'>Code Expires in <span>2:00</span></p>


  <div className="otp-btn-div">
   <button className='otp-verify'>Verify</button>
  </div>

  <p className='otp-resend'>Resend the code</p>
  </div>
 );
}

export default Otp