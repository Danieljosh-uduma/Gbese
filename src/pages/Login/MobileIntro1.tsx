import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  ArrowLeftIcon, InterestIcon,} from '../../components/icons/Icon'
import './MobileIntro.css'
function MobileIntro1() {
  const navigate = useNavigate();

  return (
    <div className="mobile-screen">
      <button className="skip-btn" onClick={() => navigate('/signup')}>
        <ArrowLeftIcon /> <span>Back</span>

      </button>

       <InterestIcon className="illustration" width={300} />
      <h2>Streamline Your Debt, Transfers Effortlessly and Effectively.</h2>
      <p>
        Easily manage debt payments, transfers, and more with Gbese.
        Enjoy a seamless experience that puts convenience at your fingertips.
      </p>
      <div className="dots">
        <span className="dot active" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <button className="next-btn" onClick={() => navigate('/mobile-intro-2')}>
        Next
      </button>
 </div>
);
}
export default MobileIntro1;
