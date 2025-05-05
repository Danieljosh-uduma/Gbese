import { FaChevronRight } from 'react-icons/fa';
import './TopNav.css';

export default function TopNav() {
  return (
    <div className="top-nav">
      <button className="back-btn">
        ← Back
      </button>
      <a className="skip-link" href="#">
        Skip   <FaChevronRight size={10} color="teal" />
      </a>
    </div>
  );
};

