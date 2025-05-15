import React, { useState } from 'react';
import { CalendarDaysIcon, CameraIcon, LinkIcon, ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import './DebtTransferForm.css';
import { useType } from '../../../hooks/useType';

function DebtTransferForm() {
  const navigate = useNavigate();
  const { BASE_URL } = useType()

  const [formValues, setFormValues] = useState({
    debtAmount: '',
    debtType: '',
    accountRef: '',
    dueDate: '',
  });

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormValues((prev) => ({
    ...prev,
    [name]: value,
  }));
};

 const handleContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log('Form submitted:', formValues);
  navigate(`${BASE_URL}/debt-transfer/incentives`)
};

  const isFormValid =
    formValues.debtAmount &&
    formValues.debtType &&
    formValues.accountRef &&
    formValues.dueDate;

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
        <p>Step 2/4</p>
        <div className="progress-bars">
          <div className="progress-fills" style={{ width: '50%' }} />
        </div>
      </div>

      {/* Form Container */}
      <div className="form-container">
        <div className="form-box">
          <div className="form-title">
            <h3>Debt Details</h3>
            <p>Select the source of your debt</p>
          </div>
          <form>
            {/* Debt Amount */}
            <div className="form-group">
              <label htmlFor="debt-amount">Debt Amount</label>
              <input
                type="number"
                id="debt-amount"
                name="debtAmount"
                placeholder="Enter amount"
                value={formValues.debtAmount}
                onChange={handleInputChange}
              />
            </div>

            {/* Debt Type */}
            <div className="form-group">
              <label htmlFor="debt-type">Debt Type</label>
              <select
                id="debt-type"
                name="debtType"
                value={formValues.debtType}
                onChange={handleInputChange}
              >
                <option value="">Select a debt type</option>
                <option value="loan">Loan</option>
                <option value="credit-card">Credit Card</option>
                <option value="utility-bill">Utility Bill</option>
                <option value="others">Others</option>
              </select>
            </div>

            {/* Account / Reference Number */}
            <div className="form-group">
              <label htmlFor="account-ref">Account/Reference Number</label>
              <input
                type="text"
                id="account-ref"
                name="accountRef"
                placeholder="Enter account or reference number"
                value={formValues.accountRef}
                onChange={handleInputChange}
              />
            </div>

            {/* Due Date */}
            <div className="form-group icon-input">
              <label htmlFor="due-date">Due Date</label>
              <CalendarDaysIcon className="icons" />
              <input
                type="date"
                id="due-date"
                name="dueDate"
                value={formValues.dueDate}
                onChange={handleInputChange}
              />
            </div>

            {/* Interest Rate (optional) */}
            <div className="form-group">
              <label htmlFor="interest-rate">Interest Rate (if applicable)</label>
              <input
                type="number"
                step="0.01"
                id="interest-rate"
                name="interestRate"
                placeholder="0.00"
              />
            </div>

            {/* Attach Bill/Statement */}
           {/* Attach Bill/Statement */}
<div className="form-group">
  <label>Attach Bill/Statement (Optional)</label>
  <div className="upload-controls">
    <button
      type="button"
      id="camera-btn"
      onClick={() => document.getElementById('camera-input')?.click()}
    >
      <CameraIcon /> Camera
    </button>
    <button
      type="button"
      id="upload-btn"
      onClick={() => document.getElementById('file-input')?.click()}
    >
      <LinkIcon /> Upload
    </button>
  </div>

  {/* Hidden input for camera */}
  <input
    type="file"
    accept="image/*"
    capture="environment"
    id="camera-input"
    style={{ display: 'none' }}
    onChange={(e) => {
      if (e.target.files?.[0]) {
        console.log('Camera file selected:', e.target.files[0]);
      }
    }}
  />

  {/* Hidden input for file upload */}
  <input
    type="file"
    id="file-input"
    style={{ display: 'none' }}
    onChange={(e) => {
      if (e.target.files?.[0]) {
        console.log('Uploaded file:', e.target.files[0]);
      }
    }}
  />
</div>

            {/* Notes */}
            <div className="form-group">
              <label htmlFor="notes">Notes (Optional)</label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="Additional details about this debt"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="action-buttons">
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate('/')}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="continue-btn"
                disabled={!isFormValid}
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DebtTransferForm;
