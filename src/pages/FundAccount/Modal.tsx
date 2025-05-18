import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { fundAccount } from '../../services/debtTransfer';
import { useAuth } from '../../hooks/useAuth';

interface ShareLinkModalProps {
  isOpen: boolean;
  amount: string
  setAmount: Dispatch<SetStateAction<string>>
}

const AmountModal: React.FC<ShareLinkModalProps> = ({
  isOpen,
  amount,
  setAmount
}) => {
    const navigate = useNavigate()
    const { user } = useAuth()


  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

function handleContinue(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fundAccount(user?.token, amount).then(res => 
      window.open(res.data, '_blank', 'rel=noopener noreferrer')
    )

}
  return (
    <div className="modal-overlay">
      <div className="modal-content modal-content-amount">
        <h3 className="how">Fund your Gbese Account</h3>
        <p className="modal-subtitle">Amount to top-up:</p>

        

        <form onSubmit={handleContinue}>
           <div className="form-group">
              <label htmlFor="account-ref">Amount </label>
              <input
                type="text"
                id="account-ref-modal"
                name="accountNumber"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

        <div className="action-buttons">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="continue-btn"
                disabled={!amount}
              >
                Continue
              </button>
            </div>
        </form>
        
      </div>
    </div>
  );
};

export default AmountModal;
