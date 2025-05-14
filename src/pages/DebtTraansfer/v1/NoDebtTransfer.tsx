import React from 'react';
import './NoDebtTransfer.css';
import { ArrowLeftIcon, InformationIcon } from '../../../components/icons/Icon';
import { useNavigate } from 'react-router-dom';

const NoDebtTransfer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="debt-transfer-container">
      <div className="header-row">
        <div className="back-group" onClick={() => navigate(-1)}>
          <ArrowLeftIcon className="back-icon" />
          <span className="back-text">Back</span>
        </div>
        <h2 className="page-title">Transfer your debt</h2>
      </div>

      <div className="empty-state">
        <div className="empty-icon-wrapper">
          <InformationIcon className="empty-icon" />
        </div>
        <h3 className="empty-title">No Active Debt Transfer</h3>
        <p className="empty-description">
          You haven't created any debt transfer requests yet. Start by adding your first debt to transfer.
        </p>
        <button className="create-button">Create debt transfer</button>
      </div>
    </div>
  );
};

export default NoDebtTransfer;
