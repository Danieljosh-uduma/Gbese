import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, AddIcon, ArrowDownIcon,SearchIcon } from '../../../components/icons/Icon';
import './DebtSourceStep.css';
import '../../../components/Sidebar/Sidebar'
import '../../../components/NavItem/NavItem'
import { useType } from '../../../hooks/useType';
import { getBankList } from '../../../services/debtTransfer';
import { useAuth } from '../../../hooks/useAuth';
import { Bank } from '../../../types/helpers';
// const SOURCES = ['Fairmoney', 'Opay', 'Lendsafe', 'Ikedc', 'Quickcredit'];

const DebtSourceStep: React.FC = () => {
  const navigate = useNavigate();
  const { BASE_URL } = useType()
  const [selectedSource, setSelectedSource] = useState('');
  const [bank, setBank] = useState([] as Bank[]);
  const [bankCode, setBankCode] = useState('')
  const [showOptions, setShowOptions] = useState(false);
  const { user } = useAuth()
  const token = user?.token

  const handleContinue = () => {
    if (selectedSource) {
      navigate(`${BASE_URL}/debt-transfer/form`, {state: {'bankCode': bankCode, 'bankName': selectedSource}});
    }
  };

  function handleClick(e: React.MouseEvent<HTMLInputElement>) {
    e.stopPropagation();
    getBankList(token).then(res => {
      if (res.success) {
        setBank(res.data)
      } else if (res.status === 401) {
        navigate('/auth/login')
      }
    })
    setShowOptions(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedSource(e.target.value)
    getBankList(token).then(res => {
      if (res.success) {
        setBank(res.data);
      } else if (res.status === 401) {
        navigate('/auth/login');
      }
    }).then(() => {
        setBank(prevBank => 
        prevBank.filter(item => 
          item.name.toLowerCase().includes(selectedSource.toLowerCase())
      )
    );
    });

    
  }

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
            value={selectedSource}
        onChange={handleChange}
        onClick={handleClick}
          />
        <ArrowDownIcon className="dropdown-arrow" />
        </div>

        {showOptions && (
          <ul className="dropdown-options">
            {bank.map((source) => (
              <li
                key={source.code}
                onClick={() => {
                  setSelectedSource(source.name);
                  setBankCode(source.code)
                  setShowOptions(false);
                }}
              >
                {source.name}
              </li>
            ))}
          </ul>
        )}

        <button
          className="custom-source-btn" onClick={() => {
           alert('Unable to do that now!')
          }}
        >
<span className="icon-text"><AddIcon className="add-icon" />
    Add custom source
  </span>
        </button>

        <div className="action-buttons">
          <button className="cancel-btn" onClick={() => navigate(`${BASE_URL}/`)}>Cancel</button>
          <button
            className="continue-btn"
            disabled={!selectedSource}
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
