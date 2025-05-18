import React from 'react';
import { TickCircleIcon } from '../../../components/icons/Icon'; // Update this import path if needed
import './SuccessModal.css';
import { useNavigate } from 'react-router';
import { useType } from '../../../hooks/useType';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  transactionId: string;
  amount: string;
  expectedResponse: string;
  onFindBenefactor: () => void;
  onShareRequest: () => void;
  onBackToDashboard: () => void;
  isLoading: boolean
  link: string
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  transactionId,
  amount,
  expectedResponse,
  isLoading,
  link
//   onBackToDashboard,
}) => {
  const navigate = useNavigate()
  const { BASE_URL } = useType()
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="success-modal">
        {isLoading ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '250px',
            }}
          >
            <div
              style={{
                border: '12px solid #E5DBFF',
                borderTop: '12px solid #5D3FD3',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                animation: 'spin 1s linear infinite',
              }}
            />
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg);}
                  100% { transform: rotate(360deg);}
                }
              `}
            </style>
            <span style={{ marginTop: '24px', color: 'purple', fontWeight: 600, fontSize: '1.2rem' }}>
              Processing...
            </span>
          </div>
        ) : <>
            <div className="success-icon">
          <TickCircleIcon />
        </div>

        <h3 className="success-title">Your debt transfer request is live</h3>
        <p className="success-subtitle">
          Your request has been submitted successfully and is now visible to potential benefactors.
        </p>

        <div className="success-details">
          <div className="detail-row">
            <span className="labels">Transaction ID:</span>
            <span className="value">{transactionId}</span>
          </div>
          <div className="detail-row">
            <span className="labels">Amount:</span>
            <span className="value">₦{amount}</span>
          </div>
          <div className="detail-row">
            <span className="labels">Expected response:</span>
            <span className="value">{expectedResponse}</span>
          </div>
          {link && 
            <div className="detail-row">
            <span className="labels">Payment Link:</span>
            {link.substring(0, 30)}...
          </div>
          }
        </div>

        {link? 
          <button className="primary-button" onClick={() => {
            navigator.clipboard.writeText(link)
            alert('copied!')
          }}>Copy Link</button>:
          <button className="primary-button" onClick={() => navigate(`${BASE_URL}/marketplace`)}>Find Benefactor</button>  
      }
        <button className="secondary-button" onClick={() => navigate(`${BASE_URL}/`)}>Back to Dashboard</button>
        </>}
      </div>
    </div>
  );
};

export default SuccessModal;
