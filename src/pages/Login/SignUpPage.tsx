import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+234');
  const navigate = useNavigate();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
  
    console.log(`Country Code: ${countryCode}, Phone: ${phoneNumber}`);
  };

  return (
    <div className="signup-container">
    
      <div className="left-panel">
        <div className="illustration-wrapper">
          <img src="/src/components/icons/Q and A about loan.png" alt="Illustration" className="illustration" />
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
          <img src="/src/components/icons/Logo-white.png" alt="" />
        </div>
</div>
    <div className="signup-panel">
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
    </div>
  );
};

export default SignUpPage;
