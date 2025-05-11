import { useState } from 'react';
import './Navbar.css';

type NavbarProps = {
  coinCount: number;
};

function Navbar(props: NavbarProps) {
  const [activeView, setActiveView] = useState('grid');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleViewChange = (view: string) => {
    setActiveView(view);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar">
    
      <div className="navbar-top">
        <h1 className="title">Market Place</h1>

        <div className="navbar-top-right">
          <div className="coin-display">
            <img src="/src/assets/images/icons/coin.svg" alt="coin" className="coin-icon" />
            <span>{props.coinCount} coins</span>
          </div>

          <button className="icon-button">
            <img src="/src/assets/images/icons/notification-bing.svg" alt="notifications" className="icon-image" />
          </button>

          <div className="avatar-wrapper" onClick={toggleDropdown}>
            <img src="/src/assets/images/icons/nav-img.svg" alt="avatar" className="avatar" />
            <img src="/src/assets/images/icons/dropdown.svg" alt="dropdown" className="dropdown-icon" />
            {showDropdown && (
              <div className="dropdown-menu">
                <a href="#">Profile</a>
              </div>
            )}
          </div>
        </div>
      </div>


      <div className="navbar-bottom">
        <div className="left-section">
          <h2 className="sub-title">Find Helper</h2>
          <form>
            <div className="search-wrapper">
              <img src="/src/assets/images/icons/search.svg" alt="search" className="search-icon" />
              <input
                type="text"
                placeholder="Search for helpers..."
                className="search-input"
              />
            </div>
          </form>
        </div>

        <div className="view-buttons">
        <button
    className={`view-btn ${activeView === 'filters' ? 'active' : ''}`}
    onClick={() => handleViewChange('filters')}
  >
    <img src="/src/assets/images/icons/filter.svg" alt="filter" className="btn-icon" />
    Filters
  </button>
          <button
            className={`view-btn ${activeView === 'grid' ? 'active' : ''}`}
            onClick={() => handleViewChange('grid')}
          >
            Grid
          </button>
          <button
            className={`view-btn ${activeView === 'list' ? 'active' : ''}`}
            onClick={() => handleViewChange('list')}
          >
            List
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
