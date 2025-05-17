import { useState } from 'react';
import {  
    LayoutGrid,
    User,
    ShoppingBag, 
    Settings,
    RepeatIcon,
    WalletIcon,
    ClipboardList,
    Heart,
    X,
    Menu
} from 'lucide-react';
import NavItem from '../NavItem/NavItem';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LOGO from '../../assets/images/icons/Logo-text.png'
import './Sidebar.css';
import { useType } from '../../hooks/useType';

function Sidebar() {
const [activeNavItem, setActiveNavItem] = useState('Dashboard');
const navigate = useNavigate()
const { BASE_URL } = useType()


const handleNavItemClick = (label: string, url: string) => {
    navigate(BASE_URL+url)
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
        label="Dashboard" 
        active={activeNavItem === 'Dashboard'} 
        onClick={() => handleNavItemClick('Dashboard', '/')}
        />
        <NavItem 
        icon={<RepeatIcon size={20} />} 
        label="Debt Transfer" 
        active={activeNavItem === 'Debt Transfer'} 
        onClick={() => handleNavItemClick('Debt Transfer', '/debt-transfer')}
        />
        <NavItem 
        icon={<WalletIcon size={20} />} 
        label="Request" 
        active={activeNavItem === 'Request'} 
        onClick={() => handleNavItemClick('Request', '/request')}
        />
        <NavItem 
        icon={<ClipboardList size={20} />} 
        label="Transaction History" 
        active={activeNavItem === 'Transaction History'} 
        onClick={() => handleNavItemClick('Transaction History', '/history')}
        />
        <NavItem 
        icon={<ShoppingBag size={20} />} 
        label="Market Place" 
        active={activeNavItem === 'Market Place'} 
        onClick={() => handleNavItemClick('Market Place', '/marketplace')}
        />
        <NavItem 
        icon={<User size={20} />} 
        label="Profile" 
        active={activeNavItem === 'Profile'} 
        onClick={() => handleNavItemClick('Profile', '/profile')}
        />
    </nav>
    
    <div className="sidebar-footer">
        
        <div className="support-section">
        <NavItem 
            icon={<Heart size={20} />} 
            label="Help & Support" 
            active={activeNavItem === 'Help & Support'} 
            onClick={() => handleNavItemClick('Help & Support', '/support')}
        />
        <NavItem 
            icon={<Settings size={20} />} 
            label="Settings" 
            active={activeNavItem === 'Settings'} 
            onClick={() => handleNavItemClick('Settings', '/setting')}
        />
        </div>
    </div>
    </div>
);
};

export default Sidebar;