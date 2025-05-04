import React, { useState } from 'react';
import { Logo } from '../../../components/icons/Icon';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../../components/common/button/Button';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { ArrowLeftIcon}  from '../../../components/icons/Icon';
import { CalendarIcon } from '../../../components/icons/Icon';
import { ProfileType } from '../../../types/User';
import { createUser, validateEmail } from '../../../services/Auth';
import './CompleteProfile.css';


function CompleteProfile() {
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const key = useLocation().state.key
  const profileData: ProfileType = { fullName, email, password, dateOfBirth, gender }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  function handleCreateAccount(e: React.FormEvent) {
    setIsLoading(true)
    setError('')
    e.preventDefault();
    
    if (email.trim() === '' || password.trim() === '' || fullName.trim() === '' || dateOfBirth.trim() === '') {
      setIsLoading(false)
      setError('Fill out all detail')
      return
    } else if (!validateEmail(email)) {
      setIsLoading(false)
      setError('Enter a valid email address')
      return
    } else {
      
      // call api endpoint
      createUser({key, ...profileData})
        .then(res => {
          setIsLoading(false)
          setError('')
          if (res.success) {
            navigate('/', {state: {key: res.key}})
          } else {
            setError(res.message)
          }
        })
        .catch(err => {
          setIsLoading(false)
          setError(err.message)
        })
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-card">
        <div className="backlink" onClick={() => navigate('/signup')} 
          style={{cursor: 'pointer'}}><ArrowLeftIcon /> <span>Back</span>


        </div>
          <div className="avatar">
            <Logo className="avatar-img" />
          </div>

          <h2>Complete your profile</h2>

          <form onSubmit={handleCreateAccount}>
            <div className="input-row1">
            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder='John Doe'
                onChange={(e) => setFullName(e.target.value)}/>
            </div>
          
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="john@doe.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group password-group">
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                
                <button type="button" onClick={togglePasswordVisibility} className="toggle-password">
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
    value={dateOfBirth}
    placeholder='2023-10-10'
    onChange={(e) => setDateOfBirth(e.target.value)}
    className={dateOfBirth ? 'filled' : ''}
  />
  <CalendarIcon className="calendar-icon" />
</div>
            </div>
              <div className="input-group2">
                <label>Gender</label>
                <select value={gender} title='gender' onChange={(e) => setGender(e.target.value)}>
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {error && <p className="error">{error}</p>} 
            <Button className="continue-button large-btn" isLoading={isLoading} disabled={isLoading}>Create account</Button>

            <div className="footer-links">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
