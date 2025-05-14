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
import NavItem from '../NavItem/NavItem';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LOGO from '../../assets/images/icons/Logo-text.png'
import './Sidebar.css';
import { useType } from '../../hooks/useType';

function Sidebar() {
const navigate = useNavigate()
const location = useLocation()
const { BASE_URL } = useType()


const handleNavItemClick =  (url: string) => {
    navigate(BASE_URL+url)
};

return (
    <div className="sidebar">
    <div className="sidebar-header">
        <div className="logo">
            <Link to={`${BASE_URL}/`}>
                <img src={LOGO} alt="Logo" className="logo-image" />
            </Link>
        </div>
    </div>
    
    <nav className="sidebar-nav">
        <NavItem 
        icon={<LayoutGrid size={20} />}
        label="Dashboard" 
        active={location.pathname === `${BASE_URL}/`} 
        onClick={() => handleNavItemClick('/')}
        />
        <NavItem 
        icon={<RepeatIcon size={20} />} 
        label="Debt Transfer" 
        active={location.pathname === `${BASE_URL}/debt-transfer`} 
        onClick={() => handleNavItemClick('/debt-transfer')}
        />
        <NavItem 
        icon={<WalletIcon size={20} />} 
        label="Request" 
        active={location.pathname === `${BASE_URL}/request`} 
        onClick={() => handleNavItemClick('/request')}
        />
        <NavItem 
        icon={<ClipboardList size={20} />} 
        label="Transaction History" 
        active={location.pathname === `${BASE_URL}/history`} 
        onClick={() => handleNavItemClick('/history')}
        />
        <NavItem 
        icon={<ShoppingBag size={20} />} 
        label="Market Place" 
        active={location.pathname === `${BASE_URL}/marketplace`} 
        onClick={() => handleNavItemClick('/marketplace')}
        />
        <NavItem 
        icon={<User size={20} />} 
        label="Profile" 
        active={location.pathname === `${BASE_URL}/profile`} 
        onClick={() => handleNavItemClick('/profile')}
        />
    </nav>
    
    <div className="sidebar-footer">
        
        <div className="support-section">
        <NavItem 
            icon={<Heart size={20} />} 
            label="Help & Support" 
            active={location.pathname === `${BASE_URL}/support`} 
            onClick={() => handleNavItemClick('/support')}
        />
        <NavItem 
            icon={<Settings size={20} />} 
            label="Settings" 
            active={location.pathname === `${BASE_URL}/setting`} 
            onClick={() => handleNavItemClick('/setting')}
        />
        </div>
    </div>
    </div>
);
};

export default Sidebar;
