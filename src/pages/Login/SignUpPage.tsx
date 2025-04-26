import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+234');
  const navigate = useNavigate();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    // Later: you can add phone number validation here
    console.log(`Country Code: ${countryCode}, Phone: ${phoneNumber}`);
  };

  return (
    <div className="signup-container">
      {/* Logo Top Left */}
      <div className="logo">
        <img src="/src/components/icons/Logo.png" alt="" />
      </div>

      {/* Centered Content */}
      <div className="signup-content">
        <h1>Sign Up</h1>

        <div className="logo-circle">
          <img src="/src/components/icons/Group 33925 (1).png" alt="" />
        </div>
         <div className="mid-text">
        <h2>Hey, there!</h2>
        <p>Create your Account</p>
         </div>  
            
    
        <form onSubmit={handleContinue} className="signup-form">
            <label className= "phone-num">Phone Number</label>
          <div className="phone-input">
            <select
            
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
             >
                
              <option value="+234">+234</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+297">+44</option>
              <option value="+43">+44</option>
              <option value="+973">+44</option>
              <option value="+238">+44</option>
                <option value="+1">+1</option>
            </select>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <button type="submit" className="continue-button">
            Continue
          </button>
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
  );
};

export default SignUpPage;
