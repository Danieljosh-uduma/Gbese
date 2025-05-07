import { useState } from 'react';
import { Link } from 'react-router';
import { SendSquareIcon, HeartAddIcon, AddSquareIcon, CopyIcon} from '../../../components/icons/Icon';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
// import Layout from './Layout';
import './NewBenefactor.css'; 

interface FeaturedItem {
  amount: string;
  return: string;
  description: string;
}

function DashboardOldBenefactor() {
  const [showBalance, setShowBalance] = useState(true);
 
  function copyAccountNumber  () {
    navigator.clipboard.writeText('28910376969');
    alert('Account number copied!');
  };
   
  function toggleBalance() {
    setShowBalance(!showBalance);
  };


  const featured: FeaturedItem[] = [
    { amount: "₦40,000", return: '9.8%', description: "Supporting Jamal's teaching dream" },
    { amount: "₦50,000", return: '12.2%', description: "Helping Maria fund surgery" },
    { amount: "₦60,000", return: '13.6%', description: "Helping Luisa leave credit debt" },
    { amount: "₦10,000", return: '4.2%', description: "Funding Ahmed's final semester" },
    { amount: "₦50,000", return: '13.0%', description: "Backing Rachel's wellness clinic" },
  ];

 

  return (
    <div className="dashboard-newbenefactor">
      <div className="summary-section">
     
     <div className="available-balance-box">
      <div className="balance-top">
        <div className="balance-info">
          <p className="labels">Available Balance <span className="eye-icon" onClick={toggleBalance} style={{ cursor: "pointer", marginLeft: "10px" }}>
                  {showBalance ? <FaRegEye /> : <FaRegEyeSlash />}
            </span></p>
          < div className="amount">
            {showBalance ? '₦225,200' : '****'}
            
          </div>
        </div>
          <div className="balance-side">
            <button className="balance-btn">+ Add Money</button>
          </div>
          </div>
          <div className="account-info">
  <p>
    Acc Number: 28910376969{' '}
    <span onClick={copyAccountNumber} style={{ cursor: 'pointer' }}>
      <CopyIcon className="copy-icon" width={20} />
    </span>
  </p>
</div>
 
      </div>


     
      <div className="summary-card-wrapper">
      <p className="summary-heading">Investment Summary</p>
        <div className="summary-cards">
          <div className="text"></div>
          <div className="summary-card">Total Amount Invested <strong>0</strong></div>
          <div className="summary-card">Number of people helped <strong>0</strong></div>
          <div className="summary-card">ROI <strong>0</strong></div>
        </div>
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
          <Link to="/recentactivity">View Activities</Link>
          </div>
        <div className="activity-tabs">
          <div className="tab active">All Activities</div>
          <div className="tab debt">Accepted debts</div>
          <div className="tab upcoming">Upcoming payments</div>
          <div className="tab schedule">Scheduled payment</div>
        </div>
        <p className="no-activity">No Recent Activity</p>
      </div>
      </div>
  );
}

export default DashboardOldBenefactor;
