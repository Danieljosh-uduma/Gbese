import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import ProfileAvatar from '../../../assets/images/images/db51a0d15a178e33aa72ad690140b567642de318.png'
import './Header.css';
import { NotificationIcon } from '../../icons/Icon';
import { useAuth } from '../../../hooks/useAuth';
import { useType } from '../../../hooks/useType';

    const Header: React.FC = () => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const { user, logout } = useAuth()
    const { BASE_URL, setShowSidebar } = useType()
    
    const toggleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };
    
    return (
        <header className="header">
        <div id="menu" onClick={() => {
            setShowSidebar(prev => !prev)}
            }>
            <Menu />
        </div>
        <h1 className="greeting">Hello {user?.fullname},👋🏼</h1>
        <div className="header-actions">
            <div className="coins">
                <div className="coin-icon">
                    <span>G</span>
                </div>
                <span className="coin-amount">{user?.coins} coins</span>
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
                <a href={`${BASE_URL}/setting/edit-profile`} className="dropdown-item">
                    Edit Profile
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