import { useState } from 'react';
import './Navbar.css';
import { benefactorListProp } from '../../types/helpers';

type NavProp = {
  list: benefactorListProp[] | undefined
  setList: () => void
  setGrid: () => void
}

function  Navbar(props: NavProp) {
  const [activeView, setActiveView] = useState('grid');
  const { setList, setGrid } = props

  const handleViewChange = (view: string) => {
    setActiveView(view);
    if (view === 'grid') {
      setGrid()
    } else {
      setList()
    }
  };

  
  return (
    <div className="navbar">
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
                onChange={(e) => {console.log(e.target.value)}}
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
