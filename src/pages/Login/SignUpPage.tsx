
// src/pages/SignUpPage.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignUpPage.css'
import { ArrowLeftIcon, Logo, QAIcon } from '../../components/icons/Icon'
import Button from '../../components/common/button/Button'
function SignUpPage() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [countryCode, setCountryCode] = useState('+234')
  const navigate = useNavigate()

  function handleContinue(e: React.FormEvent) {
    // Handle continue logic here 
    e.preventDefault()
    console.log(`Country Code: ${countryCode}, Phone: ${phoneNumber}`)
  }

  return (
    <div className="signup-container">
      
      <div className="left-panel">
        <div className="illustration-wrapper">
          <QAIcon className="illustration" width={300} />
        </div>
        <div className="left-text">
          <h2>
            Streamline Your <span className="highlight">Debt Transfers</span> Effortlessly and Effectively
          </h2>
          <p>
            Easily manage debt payments, transfers, and more with Gbese. Enjoy a seamless experience that puts
            convenience at your fingertips.
          </p>
        </div>
        <div className="left-logo">
          <Logo type="white" className="logo" />
        </div>
      </div>
      <div className="signup-panel">
        <div className="backlink" onClick={() => navigate('/login')} 
          style={{cursor: 'pointer'}}><ArrowLeftIcon /> <span>Back</span>


        </div>
        <div className="signup-content">
          <h1>Sign Up</h1>

          <div className="logo-circle">
            <Logo className="logo-circle-img" />
          </div>
          <div className="mid-text">
            <h2>Hey, there!</h2>
            <p>Create your Account</p>
          </div>  

          <form onSubmit={handleContinue} className="signup-form">
            <label className="phone-num">Phone Number</label>
            <div className="phone-input">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                <option value="+234">+234</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+297">+297</option>
                <option value="+43">+43</option>
                <option value="+973">+973</option>
                <option value="+238">+238</option>
                <option value="+1">+1</option>
              </select>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

           <Button size="large" >Continue </Button>
          </form>

          <div className="signup-footer">
            <p>
              Already have an account?{' '}
              <span onClick={() => navigate('/login')} className="login-link">
                Log in
              </span>
            </p>
            <div className="terms-links">
              <a href="#">Privacy</a>  <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
