import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import './ProfilePage.css';

const ProfilePage: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if screen is mobile size on initial load and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsSidebarCollapsed(true);
      } else {
        setIsSidebarCollapsed(false);
      }
    };

    // Set initial state
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="app-container">
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && !isSidebarCollapsed && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
      
      <div className={`sidebar-container ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      </div>
      
      <div className="main-content">
        <div className="mobile-header">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>
        </div>

        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-banner"></div>
            <div className="profile-info">
              <div className="profile-avatar">
                <img src="/src/assets/images/images/db51a0d15a178e33aa72ad690140b567642de318.png" alt="Profile avatar" />
              </div>
              <div className="profile-details">
                <h1 className="profile-name">Margaret Okoye</h1>
                <div className="profile-badge">
                  <span>Beneficiary</span>
                </div>
                <p className="profile-username">@User234567</p>
                <div className="profile-rating">
                  <img src='/src/assets/images/icons/Star.png'alt='full star' className="star" />
                  <img src='/src/assets/images/icons/Star.png'alt='full star' className="star" />
                  <img src='/src/assets/images/icons/Star.png'alt='full star' className="star" />
                  <img src='/src/assets/images/icons/Star.png'alt='full star' className="star" />
                  <img src='/src/assets//images/icons/Star Half.png' alt='half star' className="star" />
                </div>
              </div>
            </div>
          </div>

          <div className="profile-body">
            <div className="statistics-section">
              <h2 className="section-title">Statistics</h2>
              <div className="statistics-grid">
                <div className="statistic-card">
                  <div className="statistic-value">42</div>
                  <div className="statistic-label">Debt Transfers</div>
                </div>
                <div className="statistic-card">
                  <div className="statistic-value">40</div>
                  <div className="statistic-label">Helpers</div>
                </div>
                <div className="statistic-card">
                  <div className="statistic-value">92%</div>
                  <div className="statistic-label">Success Rate</div>
                </div>
                <div className="statistic-card">
                  <div className="statistic-value">2h</div>
                  <div className="statistic-label">Response Time</div>
                </div>
                <div className="statistic-card">
                  <div className="statistic-value">10</div>
                  <div className="statistic-label">Repeat Cases</div>
                </div>
              </div>
            </div>

            <div className="achievements-section">
              <div className="section-header">
                <h2 className="section-title">Badges</h2>
                  <div className="medal-icon">
                  <img src='/src/assets/images/icons/badges/badge icon.png'/>
                </div>
                <span className="section-connector">&</span>
                <div className="medal-icon">
                  <img src='/src/assets/images/icons/achievement icon.png'/>
                </div>
                <h2 className="section-title">Achievements</h2>
              </div>

              <div className="section-header-2">
                <div className="medal-icon">
                  <img src='/src/assets/images/icons/achievement icon.png'/>
                </div>
                <h2 className="section-title">Achievements</h2>

                <h2 className="section-title badge-2">Badges</h2>
                  <div className="medal-icon">
                  <img src='/src/assets/images/icons/badges/badge icon.png'/>
                </div>

              </div>


              
              <div className="badges-grid">
                <div className="badge-item">
                  <div className="badge-icon "><img src="/src/assets/images/icons/badges/Frame (2).png" alt="" /> </div>
                  <span className="badge-label">Key Beneficiary</span>
                </div>
                <div className="badge-item">
                  <div className="badge-icon"> <img src="/src/assets/images/icons/badges/Frame (3).png" alt="" /> </div>
                  <span className="badge-label">Social Climber</span>
                </div>
                <div className="badge-item">
                  <div className="badge-icon "> <img src="/src/assets/images/icons/badges/Frame (4).png" alt="" />  </div>
                  <span className="badge-label">Fast Reply</span>
                </div>
                <div className="badge-item">
                  <div className="badge-icon "> <img src="/src/assets/images/icons/badges/Frame (5).png" alt="" />  </div>
                  <span className="badge-label">Repeat Beneficiary</span>
                </div>
                <div className="badge-item">
                  <div className="badge-icon "> <img src="/src/assets/images/icons/badges/Frame (6).png" alt="" />  </div>
                  <span className="badge-label">100% Success</span>
                </div>
              </div>



              <div className="achievements-carousel">
                <div className="achievements-track">
                    {[...Array(2)].flatMap(() => [
                      <div className="achievement-item">
                        <div className="achievement-icon"><img src="/src/assets/images/icons/achievement icon.png" alt="" /></div>
                        <span className="achievement-label">Got Help From 40 People</span>
                      </div>,
                      <div className="achievement-item">
                        <div className="achievement-icon"><img src="/src/assets/images/icons/achievement icon.png" alt="" /></div>
                        <span className="achievement-label">Gotten ₦200,000 total</span>
                      </div>,
                      <div className="achievement-item">
                        <div className="achievement-icon"><img src="/src/assets/images/icons/achievement icon.png" alt="" /></div>
                        <span className="achievement-label">Gotten Help from 5 users more than once</span>
                      </div>,
                      <div className="achievement-item">
                        <div className="achievement-icon"><img src="/src/assets/images/icons/achievement icon.png" alt="" /></div>
                        <span className="achievement-label">Fast Response</span>
                      </div>,
                    ])}
                </div>
              </div>

              <div className="mobile-archive">
                    <div className="achievement-grid-2">
                      <div className="achievement-item-2">
                        <div className="achievement-icon-2"><img src="/src/assets/images/icons/achievement icon.png" alt="" /></div>
                        <span className="achievement-label-2">Got Help From 40 People</span>
                      </div>,
                      <div className="achievement-item-2">
                        <div className="achievement-icon-2"><img src="/src/assets/images/icons/achievement icon.png" alt="" /></div>
                        <span className="achievement-label-2">Gotten ₦200,000 total</span>
                      </div>,
                      <div className="achievement-item-2">
                        <div className="achievement-icon-2"><img src="/src/assets/images/icons/achievement icon.png" alt="" /></div>
                        <span className="achievement-label-2">Gotten Help from 5 users more than once</span>
                      </div>
                    </div>
              
              <div className="badges-grid-2">
                <div className="badge-item-2">
                  <div className="badge-icon-2 "><img src="/src/assets/images/icons/badges/Frame (2).png" alt="" /> </div>
                  <span className="badge-label-2">Key Beneficiary</span>
                </div>
                <div className="badge-item-2">
                  <div className="badge-icon-2"> <img src="/src/assets/images/icons/badges/Frame (3).png" alt="" /> </div>
                  <span className="badge-label-2">Social Climber</span>
                </div>
                <div className="badge-item-2">
                  <div className="badge-icon-2 "> <img src="/src/assets/images/icons/badges/Frame (4).png" alt="" />  </div>
                  <span className="badge-label-2">Fast Reply</span>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;