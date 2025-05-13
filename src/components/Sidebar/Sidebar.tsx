import { useState, useEffect } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import LOGO from '../../assets/images/icons/Logo-text.png'
import './Sidebar.css';
import { useType } from '../../hooks/useType';

interface SidebarProps {
    isMobile?: boolean;
    onClose?: () => void;
}

function Sidebar({ isMobile, onClose }: SidebarProps) {
    const [activeNavItem, setActiveNavItem] = useState('Dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const { BASE_URL } = useType();

    const handleNavItemClick = (label: string, url: string) => {
        navigate(BASE_URL+url);
        setActiveNavItem(label);
        
        // Close sidebar on mobile after navigation
        if (isMobile && onClose) {
            onClose();
        }
        
        // Also close the sidebar if it's open in responsive mode
        if (window.innerWidth <= 992) {
            setSidebarOpen(false);
        }
    };
    
    // Toggle sidebar function for responsive design
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    
    // Close sidebar when clicking outside on mobile devices
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const sidebar = document.getElementById('sidebar');
            const toggleBtn = document.getElementById('toggleBtn');
            
            // Only apply this behavior on mobile/tablet screens
            if (window.innerWidth <= 992 && sidebar && toggleBtn) {
                // Check if click is outside both sidebar and toggle button
                if (e.target instanceof Node && 
                    !sidebar.contains(e.target) && 
                    e.target !== toggleBtn && 
                    !(toggleBtn.contains(e.target as Node))) {
                    setSidebarOpen(false);
                }
            }
        };

        // Add event listener
        document.addEventListener('click', handleClickOutside);
        
        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Handle window resize behavior
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                // Reset sidebar state on large screens
                setSidebarOpen(false);
            }
        };

        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {/* Toggle Button - Shown only on mobile */}
            <button 
                className="toggle-sidebar-btn" 
                id="toggleBtn" 
                onClick={toggleSidebar} 
                aria-label="Toggle navigation"
            >
                <Menu size={24} />
            </button>
            
            {/* Sidebar Component */}
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`} id="sidebar">
                <div className="sidebar-header">
                    <div className="logo">
                        <Link to="/">
                            <img src={LOGO} alt="Logo" className="logo-image" />
                        </Link>
                    </div>
                    {/* Close button - visible in mobile view */}
                    <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>
                        <X size={24} />
                    </button>
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
            
            {/* Overlay for mobile view */}
            {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}
        </>
    );
}

export default Sidebar;