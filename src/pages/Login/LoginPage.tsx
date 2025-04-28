import React, { useState } from 'react';
import './LoginPage.css'; 
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'; 

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    
  };

  return (
    <div className="login-container">
        <img src="/src/components/icons/Logo.png" alt="" className="logo" />
      <div className="login-card">

        <h1>Log in</h1>

        <div className="avatar">
          <img src="/src/components/icons/lady-1.png" alt="" />
        </div>

        <h2>Welcome back</h2>
        <p className="user-name">Ndive Chidera</p>

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

        <button className="login-button" onClick={handleLogin}>
          Log In
        </button>

        <p className="signup-text">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>

        <div className="footer-links">
          <a href="/privacy">Privacy</a>  <a href="/terms">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
