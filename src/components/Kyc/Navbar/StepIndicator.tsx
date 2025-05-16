import React from 'react';
import { UserIcon, HouseIcon, DocuementTextIcon} from '../../icons/Icon';
import './StepIndicator.css';

const StepIndicator = () => (
  <div className="step-indicator">
    <div className="step active">
      <UserIcon className="icon-stepindicator" />
      <p>BVN Verification</p>
    </div>
    <div className="step">
      <HouseIcon className="icon-stepindicator" />
      <p>Address Verification</p>
    </div>
    <div className="step">
      <DocuementTextIcon className="icon-stepindicator" />
      <p>Review and submit</p>
    </div>
  </div>
);

export default StepIndicator;

