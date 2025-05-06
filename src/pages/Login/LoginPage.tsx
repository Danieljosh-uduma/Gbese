// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import './LoginPage.css';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Logo, InterestIcon, Frame1, ArrowLeftIcon } from '../../components/icons/Icon';
import Button from '../../components/common/button/Button';
import InputField from '../../components/Input/Input';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  }

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <div className="left-content">
          <InterestIcon className="illustration" width={300} />

          <div className="left-text">
            <h2>
              <span className="txt-span">Smart Management</span> & Instant Notifications
            </h2>
            <p>
              Get alerted immediately about account activities, anytime. Intuitive tools to manage your debts efficiently.
            </p>
          </div>

          <div className="left-logo">
            <Logo type="white" className="logo" />
          </div>
        </div>
      </div>

      <div className="login-container">
        <div className="backlink" onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
          <ArrowLeftIcon /> <span>Back</span>
        </div>

        <div className="login-card">
          <h1>Log in</h1>

          <div className="avatar">
            <Frame1 className="avatar-img" />
          </div>

          <h2>Welcome back</h2>

          <form onSubmit={handleLogin} className="form-fields">
            <div className="input-group">
              <label htmlFor="email"></label>
              <InputField
              label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group password-group">
              <label htmlFor="password">Your Password</label>
              <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter 6-digit Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
                <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                
                </button>
                </div>
            
              <div className="forgot-password">
                <a href="/forgot-password">Forgot Password?</a>
              </div>
            </div>

            <Button size="large">Log In</Button>

            <p className="signup-text">
              Don’t have an account? <a href="/signup">Sign Up</a>
            </p>

            <div className="footer-links">
              <a href="/privacy">Privacy</a> <a href="/terms">Terms</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
