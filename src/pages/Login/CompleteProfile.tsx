// src/pages/CompleteProfile.tsx
import React, { useState } from 'react';
import { Logo } from '../../components/icons/Icon';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/Button';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { ArrowLeftIcon, CalendarIcon } from '../../components/icons/Icon';
import InputField from '../../components/Input/Input';
import './CompleteProfile.css';

function CompleteProfile() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  function handleCreateAccount(e: React.FormEvent) {
    e.preventDefault();
    console.log({ email, password, dob, gender });
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-card">
          <div
            className="backlink"
            onClick={() => navigate('/login')}
            style={{ cursor: 'pointer' }}
          >
            <ArrowLeftIcon /> <span>Back</span>
          </div>

          <div className="avatar">
            <Logo className="avatar-img" />
          </div>

          <h2>Complete your profile</h2>

          <form onSubmit={handleCreateAccount}>
  <div className="input-row1">
    <div className="input-wrapper">
    
      <InputField
        label="Name"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div className="input-wrapper">
      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div className="input-wrapper">
      <label htmlFor="password">Password</label>
      <div className="password-wrapper2">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Put in your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="toggle-password"
        >
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
      </div>
    </div>
  </div>

  <div className="input-row">
    <div className="input-group2">
      <label>Date of Birth</label>
      <div className="custom-date-wrapper">
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className={`input-field ${dob ? 'filled' : ''}`}
        />
        <CalendarIcon className="calendar-icon" />
      </div>
    </div>

    <div className="input-group2">
      <label>Gender</label>
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="input-field"
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>
  </div>

  <Button size="large">Create account</Button>

  <div className="footer-links">
    <a href="/privacy">Privacy</a>
    <a href="/terms">Terms</a>
  </div>
</form>
        </div>
      </div>
    </div>
  );
}

export default CompleteProfile;
