// src/pages/LoginPage.tsx
import { useState } from 'react'
import './LoginPage.css'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Logo, InterestIcon,Frame1 } from '../../components/icons/Icon'
import Button from '../../components/common/button/Button'
import { useNavigate } from 'react-router-dom'
import { loginUser, validateEmail } from '../../services/Auth'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function togglePasswordVisibility() {
    setShowPassword(!showPassword)
  }

  function handleLogin() {
    setIsLoading(true)
    setError('')

    // check if field are empty
    if (email.trim() === '' || password.trim() === '') {
      setError('Please fill in all fields')
      setIsLoading(false)
      return

    } else {
      if (!validateEmail(email)) {
        setError('Please enter a valid email address')
        setIsLoading(false)
        return

      } else {
        // send request to login user
        loginUser(email, password)
          .then((res) => {
            setIsLoading(false)
            setError('')

            // Check if the response is successful
            if (res.success) {
              console.log(res)
              localStorage.setItem('userName', res.name)
              navigate('/')
            } else {
              setError(res.message)
            }
          })
          .catch((err) => {
            setIsLoading(false)
            console.error('Error:', err)
            setError('Unable to login, please try again')
            setEmail('')
            setPassword('')
          })
      }
    }
  }


  return (
    <div className="login-wrapper">
      <div className="login-left">
        <div className="left-content">
          <InterestIcon className="illustration" width={300} />

          <div className="left-text">
            <h2> <span className="txt-span">Smart Management  </span> & Instant Notifications</h2>
            <p>Get alerted immediately about account activities, anytime. Intuitive tools to manage your debts efficiently.</p>
          </div>

          <div className="left-logo">
            <Logo type="white" className="logo" />
          </div>
        </div>
      </div>

      <div className="login-container">
        <div className="login-card">
          <h1>Log in</h1>

          <div className="avatar">
          <Frame1 className="avatar-img" />
          </div>

          <h2>Welcome back</h2>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group password-group">
            <label>Your Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter 6-digit Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          </div>

          {error && <p className="error1">{error}</p>}
          <br />
          <Button 
            className='continue-button large-btn' 
            onClick={handleLogin}
            isLoading={isLoading}
            disabled={isLoading}>
              Log In
          </Button>

          <p className="signup-text">
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>

          <div className="footer-links">
            <a href="/privacy">Privacy</a>  <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
