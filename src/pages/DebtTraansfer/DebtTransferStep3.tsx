import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, InformationGreen,StashCoinIcon, MoneyDebt, MoneyRecieve } from '../../components/icons/Icon'
import './DebtTransferStep3.css'
import { useType } from '../../hooks/useType';

function DebtTransferStep3() {
const navigate = useNavigate();
const { BASE_URL } = useType()

  const [selectedOffer, setSelectedOffer] = useState('');
  const [coinAmount, setCoinAmount] = useState('');

const isCoinValid = selectedOffer === 'gieese' && coinAmount.trim() !== '' && !isNaN(Number(coinAmount));
  const isFormValid = selectedOffer && (selectedOffer !== 'gieese' || isCoinValid);

  return (
    <div className="form-page">
      {/* Header */}
      <div className="debt-header">
        <div className="title-row">
          <div className="back-buttons" onClick={() => navigate(-1)}>
            <ArrowLeftIcon className="back-icon" />
            <span className="back-text">Back</span>
          </div>
          <div className="title-group">
            <h2 className="step-title">Transfer your debt</h2>
            <p className="step-description">Complete the steps to transfer your debts.</p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="progress-sections">
        <p>Step 3/4</p>
        <div className="progress-bars">
          <div className="progress-fills" style={{ width: '75%' }} />
        </div>
      </div>

      {/* Make Your Offers Attractive */}
      <div className="incentives-section">
        <div className="incentives-header1">
        <div className="incentives-title">Make your offers attractive</div>
        <p className="incentives-subtitle">
          Set incentives to make your debt transfer appealing to others.
        </p>
        </div>

        {/* Info Box */}
        <div className="incentives-header">
          <InformationGreen className="info-icon" />
          <p className="info-text">
            Offering incentives increases the chance of your debt being accepted.
            The more attractive your offer, the faster someone will take on your debt.
          </p>
        </div>

        {/* Offer Options */}
        <div className="offer-options">
          {/* Gbese Coins */}
          <div
            className={`offer-option ${selectedOffer === 'gbese' ? 'selected' : ''}`}
            onClick={() => setSelectedOffer('gbese')}
          >
            <div className="icon-wrapper">
              <StashCoinIcon className="offer-icon" />
            </div>
            <div className="option-details">
              <p className="option-title">Gbese Coins</p>
              <p className="option-subtitle">Reward with platform tokens</p>
            </div>
          </div>

          {/* Cash Bonus */}
          <div
            className={`offer-option ${selectedOffer === 'cash' ? 'selected' : ''}`}
            onClick={() => setSelectedOffer('cash')}
          >
            <div className="icon-wrapper">
              <MoneyDebt className="offer-icon" />
            </div>
            <div className="option-details">
              <p className="option-title">Cash Bonus</p>
              <p className="option-subtitle">Offer a one-time cash payment</p>
            </div>
          </div>

          {/* Percentage Return */}
          <div
            className={`offer-option ${selectedOffer === 'percentage' ? 'selected' : ''}`}
            onClick={() => setSelectedOffer('percentage')}
          >
            <div className="icon-wrapper">
              <MoneyRecieve className="offer-icon" />
            </div>
            <div className="option-details">
              <p className="option-title">Percentage Return</p>
              <p className="option-subtitle">Offer a percentage of the debt value</p>
            </div>
          </div>
        </div>

        {/* Coin Input (only if Gieese selected) */}
        {selectedOffer === 'gbese' && (
          <div className="coin-input-group">
            <label htmlFor="coinAmount" className="coin-label">Gbese Coins Amount</label>
            <input
              type="text"
              id="coinAmount"
              className="coin-input"
              placeholder="0"
              value={coinAmount}
              onChange={(e) => setCoinAmount(e.target.value)}
            />
            <p className="coin-tip">Recommended 10–15 Gbese coins (10% of debt amount).</p>
          </div>
        )}

        {/* Tips */}
        <div className="tips-section">
          <p className="tips-title">Tips to improve your offer:</p>
          <ul className="tips-list">
            <li>For cash incentives, offering 5–10% of the debt amount typically gets fastest results</li>
            <li>Gbese coins are cheaper as they can be used for multiple transactions on the platform.</li>
            <li>Consider the timeline - higher incentives usually lead to faster transfers.</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="action-buttons">
          <button className="cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
          <button
            className="continue-btn"
            disabled={!isFormValid}
            onClick={() => {
              // Proceed to next step logic here
              console.log('Continue clicked');
              navigate(`${BASE_URL}/debt-transfer/payment-method`)
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DebtTransferStep3;
