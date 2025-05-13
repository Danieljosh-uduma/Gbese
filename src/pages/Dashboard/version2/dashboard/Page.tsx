import { useState, useEffect } from 'react';
import {SendSquareIcon, HeartAddIcon, AddSquareIcon,CopyIcon, MobileIconAccepted, MobileIconUpcoming, MobileIconScheduled, AdImageIcon,} from '../../../../components/icons/Icon';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import RecentActivity from '../recent/RecentActivity';
import DebtAcceptedModal from '../Modal/DebtAcceptedModal';
import './page.css';
import Header from '../../../../components/layout/Header/Header';
import { useAuth } from '../../../../hooks/useAuth';
import Sidebar from '../../../../components/Sidebar/Sidebar';
import { getUserDetails } from '../../../../services/marketplace';

interface FeaturedItem {
  amount: string;
  return: string;
  description: string;
}

type FilterType = "All" | "Accepted" | "Upcoming" | "Scheduled";

interface Activity {
  date: string;
  status: "Accepted" | "Upcoming" | "Scheduled";
  amount: string;
  from: string;
  tag: string;
}

function DashboardOldBenefactor() {
  const [showBalance, setShowBalance] = useState(true);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("All");
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const { user, login, logout } = useAuth()

  useEffect(() => {
        getUserDetails(user?.token)
            .then(res => {
                if (res.success) {
                    const data = res.data
                    login({token: user?.token, fullname: user?.fullname, ...data})
                } else if (res.status === 401) {
                    logout()
                }
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showBalance])

  function copyAccountNumber() {
    navigator.clipboard.writeText(user? user.acctNumber : '');
    alert('Account number copied!');
  }

  function toggleBalance() {
    setShowBalance(!showBalance);
  }

  useEffect(() => {
    if (showActivityModal || showDetailModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showActivityModal, showDetailModal]);

  const featured: FeaturedItem[] = [
    { amount: "₦40,000", return: '9.8%', description: "Supporting Jamal's teaching dream" },
    { amount: "₦50,000", return: '12.2%', description: "Helping Maria fund surgery" },
    { amount: "₦60,000", return: '13.6%', description: "Helping Luisa leave credit debt" },
    { amount: "₦10,000", return: '4.2%', description: "Funding Ahmed's final semester" },
    { amount: "₦50,000", return: '13.0%', description: "Backing Rachel's wellness clinic" },
  ];

  const recentActivities: Activity[] = [
    { date: "April 27, 2025", status: "Accepted", amount: "₦12,000", from: "Jamal Reed", tag: "#education" },
    { date: "May 10, 2025", status: "Upcoming", amount: "₦20,000", from: "Rachel Joe", tag: "#medical" },
  ];

  const filteredActivities = recentActivities.filter((activity) =>
    selectedFilter === "All" ? true : activity.status === selectedFilter
  );

  return (
    <main className='main-ben'>
    <Sidebar />
      <section className='section-ben'>
          <Header />
          <div className={`dashboard-newbenefactor ${(showActivityModal || showDetailModal) ? 'blurred' : ''}`}>
            <div className="summary-sections">
              <div className="available-balance-box">
                <div className="balance-top">
                  <div className="balance-info">
                    <p className="labels">
                      Available Balance
                      <span className="eye-icon" onClick={toggleBalance} style={{ cursor: "pointer", marginLeft: "10px" }}>
                        {showBalance ? <FaRegEye /> : <FaRegEyeSlash />}
                      </span>
                    </p>
                    <div className="amount">{showBalance ? `₦${user?.balance}` : '****'}</div>
                  </div>
                  <div className="balance-side">
                    <button className="balance-btn">+ Add Money</button>
                  </div>
                </div>
                <div className="account-info">
                  <p>
                    Acc Number: {user?.acctNumber}
                    <span onClick={copyAccountNumber} style={{ cursor: 'pointer' }}>
                      <CopyIcon className="copy-icon" width={20} />
                    </span>
                  </p>
                </div>
              </div>

              <div className="summary-card-wrapper">
                <p className="summary-heading">Investment Summary</p>
                <div className="summary-cards">
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
                <div
                  onClick={() => setShowActivityModal(true)}
                  className="view-activities-link"
                  style={{ cursor: 'pointer',  }}
                >
                  View Activities
                </div>
              </div>

              <div className="filter-button">
                {["All", "Accepted", "Upcoming", "Scheduled"].map((filter) => (
                  <div
                    key={filter}
                    className={`filter ${filter.toLowerCase()} ${selectedFilter === filter ? "active" : ""}`}
                    onClick={() => setSelectedFilter(filter as FilterType)}
                    style={{ cursor: 'pointer' }}
                  >
                    {filter === "All" ? "All Activities" : `${filter} `}
                  </div>
                ))}
              </div>

              <div className="activity-list">
      {/* Desktop View */}
      <div className="desktop-activities">
        {filteredActivities.length === 0 ? (
          <p className="no-activity">No activity found</p>
        ) : (
          filteredActivities.map((activity, index) => (
            <div key={index} className="activity-rows">
              <span className="activity-dates">{activity.date}</span>
              <span className={`activity-statuss ${activity.status.toLowerCase()}`}>{activity.status}</span>
              <span className="activity-descs">{activity.amount} debt from {activity.from}</span>
              <span className="activity-tags">{activity.tag}</span>
              <button className="view-btn" onClick={() => {
                setSelectedActivity(activity);
                setShowDetailModal(true);
              }}>
                View Details
              </button>
            </div>
          ))
        )}
      </div>

      {/* Mobile View */}
      <div className="mobile-activities">
        {filteredActivities.map((activity, index) => (
          <div className="mobile-activity" key={index}>
            <div className="status-icon">
              {activity.status === "Accepted" && <MobileIconAccepted />}
              {activity.status === "Upcoming" && <MobileIconUpcoming/>}
              {activity.status === "Scheduled" && <MobileIconScheduled />}
            </div>
            <div className="mobile-left">
              <div className="debt-from">Debt from {activity.from}</div>
              <div className="debt-date">{activity.date}</div>
            </div>
            <div className="mobile-middle">
              <div className="amount">{activity.amount}</div>
              <div className={`status ${activity.status.toLowerCase()}`}>{activity.status}</div>
            </div>
            <div className="mobile-right">
              <button
                className="mobile-view-btn"
                onClick={() => {
                  setSelectedActivity(activity);
                  setShowDetailModal(true);
                }}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

            </div>
          </div>
      </section>

      {showActivityModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <RecentActivity closeModal={() => setShowActivityModal(false)} />
          </div>
        </div>
      )}

      {showDetailModal && selectedActivity && (
        <div className="modal-overlay">
          <div className="modal-content">
            <DebtAcceptedModal onClose={() => setShowDetailModal(false)} />
          </div>
        </div>
      )}
    </main>
  );
}

export default DashboardOldBenefactor;
