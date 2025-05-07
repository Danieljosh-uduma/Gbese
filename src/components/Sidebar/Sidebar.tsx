import React, { useState } from 'react';
import {  
    LayoutGrid,
    User,
    ShoppingBag, 
    Settings,
    RepeatIcon,
    WalletIcon,
    ClipboardList,
    Heart

 } from 'lucide-react';
import NavItem from './NavItem/NavItem';
import { Link } from 'react-router-dom';
import LOGO from '../../assets/images/icons/logo.png'
import './Sidebar.css';

    const Sidebar: React.FC = () => {
    const [activeNavItem, setActiveNavItem] = useState('Dashboard');
    
    
    const handleNavItemClick = (label: string) => {
        setActiveNavItem(label);
    };
    
    return (
        <div className="sidebar">
        <div className="sidebar-header">
            <div className="logo">
                <Link to="/">
                    <img src={LOGO} alt="Logo" className="logo-image" />
                </Link>
            </div>
        </div>
        
        <nav className="sidebar-nav">
            <NavItem 
            icon={<LayoutGrid size={20} />}
            // icon={<img src={DashboardIcon} alt="Send Icon" width={20} height={20} />} 
            label="Dashboard" 
            active={activeNavItem === 'Dashboard'} 
            onClick={() => handleNavItemClick('Dashboard')}
            />
            <NavItem 
            icon={<RepeatIcon size={20} />} 
            label="Debt Transfer" 
            active={activeNavItem === 'Debt Transfer'} 
            onClick={() => handleNavItemClick('Debt Transfer')}
            />
            <NavItem 
            icon={<WalletIcon size={20} />} 
            label="Request" 
            active={activeNavItem === 'Request'} 
            onClick={() => handleNavItemClick('Request')}
            />
            <NavItem 
            icon={<ClipboardList size={20} />} 
            label="Transaction History" 
            active={activeNavItem === 'Transaction History'} 
            onClick={() => handleNavItemClick('Transaction History')}
            />
            <NavItem 
            icon={<ShoppingBag size={20} />} 
            label="Market Place" 
            active={activeNavItem === 'Market Place'} 
            onClick={() => handleNavItemClick('Market Place')}
            />
            <NavItem 
            icon={<User size={20} />} 
            label="Profile" 
            active={activeNavItem === 'Profile'} 
            onClick={() => handleNavItemClick('Profile')}
            />
        </nav>
        
        <div className="sidebar-footer">
            
            <div className="support-section">
            <NavItem 
                icon={<Heart size={20} />} 
                label="Help & Support" 
                active={activeNavItem === 'Help & Support'} 
                onClick={() => handleNavItemClick('Help & Support')}
            />
            <NavItem 
                icon={<Settings size={20} />} 
                label="Settings" 
                active={activeNavItem === 'Settings'} 
                onClick={() => handleNavItemClick('Settings')}
            />
            </div>
        </div>
        </div>
    );
    };

    export default Sidebar;