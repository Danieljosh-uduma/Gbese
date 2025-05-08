import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ProfileAvatar from '../../../assets/images/images/db51a0d15a178e33aa72ad690140b567642de318.png'
import './Header.css';
import { NotificationIcon } from '../../icons/Icon';
import { useAuth } from '../../../hooks/useAuth';

    const Header: React.FC = () => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const { logout } = useAuth()
    
    const toggleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };
    
    return (
        <header className="header">
        <h1 className="greeting">Hello Margaret,👋🏼</h1>
        <div className="header-actions">
            <div className="coins">
                <div className="coin-icon">
                    <span>G</span>
                </div>
                <span className="coin-amount">0 coins</span>
            </div>
            <button className="notification-button" title='notification'>
                <NotificationIcon />
            </button>
            <div className="profile-dropdown">
            <div className="profile-button" onClick={toggleProfileDropdown}>
                <div className="profile-avatar">

                    <img src={ProfileAvatar} alt="user-profile" />
                </div>
                <ChevronDown size={16} />
            </div>
            
            {showProfileDropdown && (
                <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                    My Profile
                </a>
                <a href="#" className="dropdown-item">
                    Account Settings
                </a>
                <a href="#" className="dropdown-item">
                    Notifications
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item sign-out" onClick={logout}>
                    Sign Out
                </a>
                </div>
            )}
            </div>
        </div>
        </header>
    );
    };

    export default Header;