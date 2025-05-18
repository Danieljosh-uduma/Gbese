import React, { useState } from 'react';
import './MarketDebt.css';
import { SearchIcon, CalendarIcon } from '../../components/icons/Icon';

const debts = Array(6).fill({
  amount: '₦25,000',
  name: 'Hassan Lateef',
  type: 'Loan',
  incentive: '5% Return',
  dueIn: '17 days',
  dueDate: '15 May 2025',
  isTimeSensitive: true,
});

const DebtGrid = () => {
  const [view, setView] = useState('grid');

  return (
    <div className="debt-grid-container">
      {/* Title */}
      <h3 className="page-title">Help Pay Debts</h3>

      {/* Top Controls */}
      <div className="top-bar">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search for helpers..."
            className="search-input"
          />
          <SearchIcon className="search-icon" />
        </div>

        <div className="view-toggle">
          <button
            className={`toggle-btn ${view === 'grid' ? 'active' : ''}`}
            onClick={() => setView('grid')}
          >
            Grid
          </button>
          <button
            className={`toggle-btn ${view === 'list' ? 'active' : ''}`}
            onClick={() => setView('list')}
          >
            List
          </button>
        </div>
      </div>

      {/* Content */}
      <div className={view === 'grid' ? 'grid' : 'list'}>
        {debts.map((debt, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <div>
                <div className="card-header-label">Debt Amount</div>
                <div className="card-amount">{debt.amount}</div>
              </div>
              {debt.isTimeSensitive && (
                <div className="time-sensitive-badge">Time Sensitive</div>
              )}
            </div>

            <div className="card-body">
              <div className="user-info">
                <div className="user-avatar">NC</div>
                <div>
                  <div className="user-name">{debt.name}</div>
                  <div className="user-type">{debt.type}</div>
                </div>
              </div>

<div className="card-details">
  <div className="detail-box">
    <div className="detail-label">Incentive</div>
    <div className="detail-value">{debt.incentive}</div>
  </div>
  <div className="detail-box">
    <div className="detail-label">Due Date</div>
    <div className="due-date">
      <CalendarIcon className="calendarr-icon" />
      <strong>{debt.dueIn}</strong>
    </div>
  </div>
</div>

              <div className="due-on">Due on {debt.dueDate}</div>
              <button className="view-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DebtGrid;
