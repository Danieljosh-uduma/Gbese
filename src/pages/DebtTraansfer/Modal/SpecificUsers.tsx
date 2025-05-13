import { useEffect } from 'react';
import { InformationIcon } from '../../../components/icons/Icon';
import './SpecificUser.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  agreed: boolean;
  setAgreed: (val: boolean) => void;
  selectedUser: string;
  setSelectedUser: (val: string) => void;
  onSubmit: () => void;
  onGoToMarketplace: () => void;
  setShowSpecificUserModal: (val: boolean) => void;
  setShowShareLinkModal: (val: boolean) => void;
};

function SendToSpecificUsersModal({
  isOpen,
  onClose,
  agreed,
  setAgreed,
  selectedUser,
  setSelectedUser,
  onSubmit,
  setShowSpecificUserModal,
  setShowShareLinkModal,
  onGoToMarketplace,

  
}: ModalProps) {
  const userOptions = ['John Doe', 'Jane Smith', 'Ndive Chidera', 'Amadi Mary'];
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="how">How do you want to transfer this debts?</h3>
        <p>Choose a transfer method</p>

        <div className="transfer-buttons">
<button className="btn-method" onClick={onGoToMarketplace}>
  List on marketplace
</button>
          <button className="btn-method active">Send to specific users</button>
          <button
            className="btn-method"
            onClick={() => {
              setShowSpecificUserModal(false);
              setShowShareLinkModal(true);
            }}
          >
            Share payment link
          </button>
        </div>

        <div className="search-users">
          <label htmlFor="user-select">Search Gbese Users</label>
          <select
            id="user-select"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="">Search users</option>
            {userOptions.map((user, idx) => (
              <option key={idx} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>

        <div className="info-box">
          <InformationIcon className="infoo-icon" />
          <div className="infoo-text">
            <div className="infoo-header">Important Information</div>
            <p className="info-sub">
              By submitting this request, you are authorizing Gbese to facilitate 
              the transfer of your debt obligation to another user. Please ensure that the selected user is accurate 
              and that you have reviewed all terms and conditions.
            </p>
          </div>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} />
            <span>I agree to the Terms and Conditions</span>
          </label>
          <p className="terms-text">
            I have read and agree to Gbese’s Terms of Service and Privacy Policy.
          </p>
        </div>

        <div className="action-buttons">
     <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="continue-btn" disabled={!agreed || !selectedUser} onClick={onSubmit}>
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default SendToSpecificUsersModal;
