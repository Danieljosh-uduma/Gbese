import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  ArrowRightIcon, ArrowLeftIcon, InterestIcon,} from '../../components/icons/Icon'
import './MobileIntro.css'
function MobileIntro3() {
  const navigate = useNavigate();

  return (
    <div className="mobile-screen">
      <button className="skip-btn" onClick={() => navigate('/signup')}>
      <span>Skip</span> <ArrowRightIcon/>

      </button>

       <InterestIcon className="illustration" width={300} />
       <div className="illustration-text">
      <h2>Smart Management & Instant Notifications</h2>
      <p>
      Get Alerted immediately about account activities, anytime. Intuitive tools to manage your debts efficiently
      </p>
      </div>
      <div className="dots">
        <span className="dot" />
        <span className="dot" />
        <span className="dot active" />
      </div>
      <div className="backlink-mobile" onClick={() => navigate('/mobileintro2')} 
          style={{cursor: 'pointer'}}><ArrowLeftIcon /> <span>Back</span>
        </div>
      <button className="next-btn" onClick={() => navigate('/signup')}>
        Next
      </button>
 </div>
);
}
export default MobileIntro3;
