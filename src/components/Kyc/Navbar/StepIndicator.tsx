import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserIcon, HouseIcon, DocuementTextIcon } from '../../icons/Icon';
import './StepIndicator.css';
import { useType } from '../../../hooks/useType';

type StepIndicatorProps = {
  activeStep: number;
};

const StepIndicator: React.FC<StepIndicatorProps> = ({ activeStep }) => {
  const { BASE_URL } = useType()
  const navigate = useNavigate();

  // Define step data with label, icon, and route path
  const steps = [
    { label: 'BVN Verification', icon: <UserIcon className="icon-stepindicator" />, path: `${BASE_URL}/setting` },
    { label: 'Address Verification', icon: <HouseIcon className="icon-stepindicator" />, path: `${BASE_URL}/setting/verify-address` },
    { label: 'Review and submit', icon: <DocuementTextIcon className="icon-stepindicator" />, path: `${BASE_URL}/setting/review-details` },
  ];

  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${activeStep === index ? 'active' : ''}`}
          onClick={() => navigate(step.path)}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') navigate(step.path);
          }}
        >
          {step.icon}
          <p>{step.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
