import React, { useEffect } from 'react';
import { InformationIcon } from '../../../components/icons/Icon';
import './ShareLinkModal.css';

interface ShareLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  agreed: boolean;
  setAgreed: (val: boolean) => void;
  onSubmit: () => void;
  onSendToUsers: () => void;
  onGoToMarketplace: () => void;
}

const ShareLinkModal: React.FC<ShareLinkModalProps> = ({
  isOpen,
  onClose,
  agreed,
  setAgreed,
  onSubmit,
  onSendToUsers,
  onGoToMarketplace,
}) => {
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
        <p className="how">How do you want to transfer this debt?</p>
        <p className="modal-subtitle">Choose a transfer method</p>

        <div className="transfer-buttons">
          <button className="btn-method" onClick={onGoToMarketplace}>
            List on marketplace
          </button>
          <button className="btn-method" onClick={onSendToUsers}>
            Send to specific users
          </button>
          <button className="btn-method active">
            Share payment link
          </button>
        </div>

        <div className="link-text">
          <p>Generate a secured payment link to share with potential benefactors.</p>
        </div>

        <div className="link-info-box">
          <p className="link-info-text">🔗 Link will be generated after submitting your request.</p>
        </div>

        <div className="transfer-divider" />

        <div className="info-box">
          <InformationIcon className="infoo-icon" />
          <div className="infoo-text">
            <p className="infoo-header">Important Information</p>
            <p className="info-sub">
              By submitting this request, you authorize Gbese to facilitate the transfer of your debt obligation
              via a sharable link. You will be notified when a benefactor accepts, and prompted to finalize the process.
            </p>
          </div>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <span>I agree to the Terms and Conditions</span>
          </label>
          <p className="terms-text">
            I have read and agree to Gbese’s Terms of Service and Privacy Policy.
          </p>
        </div>

        <div className="action-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button
            className="continue-btn"
            disabled={!agreed}
            onClick={onSubmit}
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareLinkModal;
