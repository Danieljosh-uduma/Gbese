import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getOTP } from '../../services/Api'
import { ArrowLeftIcon, Logo, QAIcon } from '../../components/icons/Icon'
import Button from '../../components/common/button/Button'
import './SignUpPage.css'



export default function SignUpPage() {
  // const { innerWidth } = window
  const [phoneNumber, setPhoneNumber] = useState('')
  const [countryCode, setCountryCode] = useState('+234')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [key, setKey] = useState('')
  const navigate = useNavigate()


  // Function to handle the continue button click
  function handleContinue(e: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true)
    setError('')
    e.preventDefault()
    
    // Validate phone number
    if (phoneNumber.length < 10) {
      setError('Please enter a valid phone number')
      setIsLoading(false)
      return

    } else {
      // send request to get OTP
      getOTP(phoneNumber)
        .then((res) => {
          setIsLoading(false)
          setError('')
          // Check if the response is successful
          if (res.success) {
            console.log(res)
            setKey(res.key)
            navigate('/verify-otp', { state: { key } })
          } else {
            // Handle error response
            setError(res.message)
          }
        })
        .catch((err) => {
          // Handle network or other errors
          setIsLoading(false)
          setError('Error sending OTP, try again')
          console.error('Error:', err)
        })
    }
  }

  return (
    <div className="signup-container">
      
      <div className="left-panel">
        <div className="illustration-wrapper">
          <QAIcon className="illustration" width={400} />
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
                title='Select your country code'
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}>
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

            {error && <p className="error">{error}</p>}
            <Button 
              className="continue-button large-btn" 
              type='submit' 
              isLoading={isLoading} 
              disabled={isLoading}>
                Continue
            </Button>
          </form>

          <div className="signup-footer">
            <p>
              Already have an account?
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

