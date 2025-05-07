import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  QAIcon,
  LoanImageOne,
  InterestIcon,
} from '../../../components/icons/Icon';
import './MobileIntro.css';

interface Slide {
  id: number;
  Illustration: React.ComponentType<React.SVGProps<SVGSVGElement> & { width?: number }>;
  heading: string;
  text: string;
}

const slides: Slide[] = [
  {
    id: 1,
    Illustration: QAIcon,
    heading: 'Streamline Your Debt, Transfers Effortlessly and Effectively.',
    text: 'Easily manage debt payments, transfers, and more with Gbese. Enjoy a seamless experience that puts convenience at your fingertips.',
  },
  {
    id: 2,
    Illustration: LoanImageOne,
    heading: 'Secure Transaction',
    text: 'Gbese has bank-level security for all your transactions.',
  },
  {
    id: 3,
    Illustration: InterestIcon,
    heading: 'Smart Management & Instant Notifications',
    text: 'Get alerted immediately about account activities. Intuitive tools to manage your debts efficiently.',
  },
];

function MobileIntroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/auth/signup');
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSkip = () => {
    navigate('/auth/signup');
  };

  const { Illustration, heading, text } = slides[currentIndex];

  return (
    <div className="mobile-screen">
      <button className="skip-btn" onClick={handleSkip}>
        <span>Skip</span> <ArrowRightIcon />
      </button>

      <div className="carousel-slide">
        <Illustration className="illustration" width={300} />
        <div className="illustration-text">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>

        <div className="dots">
          {slides.map((_, idx) => (
            <span key={idx} className={`dot ${idx === currentIndex ? 'active' : ''}`} />
          ))}
        </div>

        {currentIndex > 0 && (
          <div className="backlink-mobile" onClick={handleBack} style={{ cursor: 'pointer' }}>
            <ArrowLeftIcon /> <span>Back</span>
          </div>
        )}

        <button className="next-btn" onClick={handleNext}>
          {currentIndex < slides.length - 1 ? 'Next' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default MobileIntroCarousel;
