import React, { useState } from 'react';
import { SendSquareIcon, HeartAddIcon, AddSquareIcon, AdImageIcon } from '../../components/icons/Icon';
import './NewOldBenefactor.css';

interface FeaturedItem {
  amount: string;
  return: string;
  description: string;
}

function DashboardNewBenefactor() {
  const [activeTab, setActiveTab] = useState<string>(''); // active tab name
  const [showNoActivity, setShowNoActivity] = useState<boolean>(false); // controls visibility of the message

  const featured: FeaturedItem[] = [
    { amount: '₦40,000', return: '9.8%', description: "Supporting Jamal's teaching dream" },
    { amount: '₦50,000', return: '12.2%', description: "Helping Maria fund surgery" },
    { amount: '₦60,000', return: '13.6%', description: "Helping Luisa leave credit debt" },
    { amount: '₦10,000', return: '4.2%', description: "Funding Ahmed's final semester" },
    { amount: '₦50,000', return: '13.0%', description: "Backing Rachel's wellness clinic" },
  ];

  return (
    <div className="dashboard-newbenefactor">
      <div className="summary-section">
        <div className="summary-card-wrapper">
          <p className="summary-heading">Investment Summary</p>
          <div className="summary-cards">
            <div className="text"></div>
            <div className="summary-card">Total Amount Invested <strong>0</strong></div>
            <div className="summary-card">Number of people helped <strong>0</strong></div>
            <div className="summary-card">ROI <strong>0</strong></div>
          </div>
        </div>

        <div className="promo-box">
          <p>Help Someone Pay Their Debts Today!</p>
          <AdImageIcon className="promo-image" width={200} />
        </div>
      </div>

      <div className="actions">
        <div className="action-button">
          <SendSquareIcon className="icon" /><span className="label">Send Money</span>
        </div>
        <div className="action-button">
          <HeartAddIcon className="icon" /> <span className="label">Help Someone</span>
        </div>
        <div className="action-button">
          <AddSquareIcon className="icon" /> <span className="label">Fund Account</span>
        </div>
        <div className="action-button">
          <AddSquareIcon className="icon" /> <span className="label">Request Money</span>
        </div>
      </div>

      <div className="featured-opportunities">
        <div className="section-header">
          <p>Featured Opportunities</p>
          <a href="#">View All</a>
        </div>
        <div className="opportunities-list">
          {featured.map((item, index) => (
            <div key={index} className="opportunity-card">
              <div className="amount">{item.amount}</div>
              <div className="return">{item.return} return</div>
              <div className="description">{item.description}</div>
              <a href="#">View details</a>
            </div>
          ))}
        </div>
      </div>

      <div className="recent-activities">
        <div className="section-header">
          <p>Recent Activities</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowNoActivity(true);
              setActiveTab('all');
            }}
          >
            View Activities
          </a>
        </div>

        <div className="activity-tabs">
          <div
            className={`tab all ${activeTab === 'all' ? 'active' : ''}`} onClick={() => { setActiveTab('all'); setShowNoActivity(true);
            }} >  All Activities
          </div>
          <div className={`tab debt ${activeTab === 'debt' ? 'active' : ''}`}onClick={() => {setActiveTab('debt');
              setShowNoActivity(true);
            }} > Accepted debts
          </div>
          <div
            className={`tab upcoming ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => { setActiveTab('upcoming');setShowNoActivity(true);
            }} > Upcoming payments
          </div>
          <div
            className={`tab schedule ${activeTab === 'schedule' ? 'active' : ''}`}
            onClick={() => { setActiveTab('schedule');setShowNoActivity(true);
            }}> Scheduled payment
          </div>
        </div>

        {showNoActivity && <p className="no-activity">No Recent Activity</p>}
      </div>
    </div>
  );
}

export default DashboardNewBenefactor;
