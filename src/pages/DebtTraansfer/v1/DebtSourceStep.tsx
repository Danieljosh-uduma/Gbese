import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, AddIcon, ArrowDownIcon,SearchIcon } from '../../../components/icons/Icon';
import './DebtSourceStep.css';
import '../../../components/Sidebar/Sidebar'
import '../../../components/NavItem/NavItem'
import { useType } from '../../../hooks/useType';
const SOURCES = ['Fairmoney', 'Opay', 'Lendsafe', 'Ikedc', 'Quickcredit'];

const DebtSourceStep: React.FC = () => {
  const navigate = useNavigate();
  const { BASE_URL } = useType()
  const [selectedSource, setSelectedSource] = useState('');
  const [customSource, setCustomSource] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleContinue = () => {
    if (selectedSource || customSource) {
      console.log('Proceeding with:', selectedSource || customSource);
      navigate(`${BASE_URL}/debt-transfer/form`);
    }
  };

  return (
    <div className="debt-step-container">
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
     
      <div className="progress-sections">
        <p>Step 1/4</p>
        <div className="progress-bars">
          <div
            className="progress-fills"
            style={{ width:'25%' }}
          />
        </div>
      </div>

      <div className="form-card">
        <label className="form-labels">Select the source of your debts</label>
        <p className="form-subtext">Select the source of your debts</p>
       
        <div className="dropdown" onClick={() => setShowOptions(!showOptions)}>
        <SearchIcon className="search-icon" />
          <input
            name="debt-source"
            placeholder="Select source of debt"
            value={customSource || selectedSource}
        onChange={(e) => setCustomSource(e.target.value)}
        onClick={(e) => {
      e.stopPropagation();
      setShowOptions(true);
    }}
          />
        <ArrowDownIcon className="dropdown-arrow" />
        </div>

        {showOptions && (
          <ul className="dropdown-options">
            {SOURCES.map((source) => (
              <li
                key={source}
                onClick={() => {
                  setSelectedSource(source);
                  setCustomSource('');
                  setShowOptions(false);
                }}
              >
                {source}
              </li>
            ))}
          </ul>
        )}

        <button
          className="custom-source-btn" onClick={() => {
           const newSource = prompt('Enter custom source:');
            if (newSource) {
              setCustomSource(newSource);
              setSelectedSource('');
              setShowOptions(false);
            }
          }}
        >
<span className="icon-text"><AddIcon className="add-icon" />
    Add custom source
  </span>
        </button>

        <div className="action-buttons">
          <button className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
          <button
            className="continue-btn"
            disabled={!selectedSource && !customSource}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DebtSourceStep;
