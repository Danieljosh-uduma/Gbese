    import React, { ReactNode } from 'react';
    import './NavItem.css';

    interface NavItemProps {
    icon: ReactNode;
    label: string;
    active?: boolean;
    onClick: () => void;
    }

    const NavItem: React.FC<NavItemProps> = ({ icon, label, active = false, onClick }) => {
    return (
        <a 
        className={`nav-item ${active ? 'active' : ''}`}
        onClick={(e) => {
            e.preventDefault();
            onClick();
        }}
        >
        <div className={`nav-icon ${active ? 'active' : ''}`}>
            {icon}
        </div>
        <span className={`nav-label ${active ? 'active' : ''}`}>{label}</span>
        </a>
    );
    };

    export default NavItem;