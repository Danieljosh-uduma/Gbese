
import './Nav.css'
import { useState } from 'react';

type NavProps = {
  coinCount: number;
};

function Nav (props:NavProps) {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

    return(
         

         

        <div className="nav">
            <div className="left">
                <p>Dashboard</p>
            </div>
            <div className="right">
                <div className="coins">
                    <img src="/src/assets/images/icons/coin.svg" alt="" className='coin'/>
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
    )
};

export default Nav;