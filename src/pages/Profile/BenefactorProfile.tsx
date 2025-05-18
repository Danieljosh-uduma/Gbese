    import React, { useState, useEffect } from 'react';
    import './ProfilePage.css';
    // Import the Sidebar component
    import Sidebar from '../../components/Sidebar/Sidebar';

    // Import icons from react-icons
    import { 
    FaStar, 
    FaStarHalfAlt 
    } from 'react-icons/fa';

    export default function BenefactorProfile() {
    const value = window.innerWidth <= 992
    const [isMobile, setIsMobile] = useState(value);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 992);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Component for profile picture
    const ProfilePicture: React.FC = () => {
        return (
        <div className="profile-pic-container">
            <img 
            src="/src/assets/images/images/Avatar.png" 
            className="profile-pic" 
            alt="Profile Picture" 
            />
        </div>
        );
    };

    // Component for the star rating
    interface RatingProps {
        score: number;
    }

    const Rating: React.FC<RatingProps> = ({ score }) => {
        const stars = [];
        const fullStars = Math.floor(score);
        const hasHalfStar = score % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`star-${i}`} />);
        }
        
        if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half-star" />);
        }
        
        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaStar key={`empty-star-${i}`} style={{ opacity: 0.3 }} />);
        }
        
        return <div className="rating">{stars}</div>;
    };

    // Component for stat boxes
    interface StatBoxProps {
        number: string;
        label: string;
    }

    const StatBox: React.FC<StatBoxProps> = ({ number, label }) => {
        return (
        <div className="stat-box">
            <div className="stat-label">{label}</div>
            <div className="stat-number">{number}</div>
        </div>
        );
    };

    // Component for badge items
    interface BadgeItemProps {
        icon: React.ReactNode;
        name: string;
    }

    const BadgeItem: React.FC<BadgeItemProps> = ({ icon, name }) => {
        return (
        <div className="badge-item">
            <div className="badge-img">
            {icon}
            </div>
            <div className="badge-name">{name}</div>
        </div>
        );
    };

    // Component for achievement items
    interface AchievementItemProps {
        text: string;
    }

    const AchievementItem: React.FC<AchievementItemProps> = ({ text }) => {
        return (
        <div className="achievement-item">
            <img src="/src/assets/images/icons/achievement icon.png" alt="achievements" />
            <span>{text}</span>
        </div>
        );
    };

    return (
        <div className="container">
        {/* Use the imported Sidebar component */}
        <Sidebar />

        {/* Main Content */}
        <div className="content">
            <div className="header">
            <div className="header-actions">
                {/* Header actions can go here */}
            </div>
            </div>

            <div className="profile-section">
            {/* Profile Header */}
            <div className="profile-header">
                <ProfilePicture />
                <h2 className="profile-name">Ejiro Ovie</h2>
                <div className="user-type">Beneficiary</div>
                <p className="profile-username">@User234567</p>
                <Rating score={4.5} />
            </div>

            {/* Statistics Section */}
            <h3 className="statistics-header">Statistics</h3>
            <div className="stats-container">
                <StatBox number="42" label="Debt Transfers" />
                <StatBox number="50" label="People Helped" />
                <StatBox number="92%" label="Success Rate" />
                <StatBox number="2h" label="Response Time" />
                <StatBox number="10" label="Repeat Cases" />
            </div>

            {/* Badges Section */}
            <div className="badges-section">
                <div className="badges-header">
                {isMobile ? (
                    <>
                    <img alt='' src='/src/assets/achievement icon.png' className="badge-icon" />
                    <span className="badges-title">Achievements</span>
                    <span style={{ flex: 1 }}></span>
                    <img alt='' src='/src/assets/badges/badge icon.png' className="badge-icon" />
                    <span className="badges-title">Badges</span>
                    </>
                ) : (
                    <>
                    <span className="badges-title">Badges</span>
                    <img alt='' src='/src/assets/images/icons/badges/badge icon.png' className="badge-icon" style={{ marginRight: '20px',  width: '48px', height: '48px'}} />
                    <span>&</span>
                    <img alt='' src='/src/assets/images/icons/achievement icon.png' className="badge-icon" style={{ marginLeft: '20px',  width: '48px', height: '48px'}} />
                    <span className="badges-title">Achievements</span>
                    </>
                )}
                </div>

                {isMobile ? (
                <>
                    <div className="achievements-list">
                    <AchievementItem text="Got Help from over 40 People" />
                    <AchievementItem text="Gotten over ₦200,000 total" />
                    <AchievementItem text="Gotten Replies within 2 hours" />
                    </div>
                    
                    <div className="badges-container">
                    <BadgeItem icon={<img alt='' src='/src/assets/images/icons/badges/Frame (2).png'/>} name="Big Givers" />
                    <BadgeItem icon={<img alt='' src='/src/assets/images/icons/badges/Frame (3).png' />} name="First Support" />
                    </div>
                </>
                ) : (
                <>
                    <div className="badges-container">
                    <BadgeItem icon={<img alt='' src='/src/assets/images/icons/badges/Frame (2).png' />} name="Big Givers" />
                    <BadgeItem icon={<img alt='' src='/src/assets/images/icons/badges/Frame (3).png' />} name="First Support" />
                    <BadgeItem icon={<img alt='' src='/src/assets/images/icons/badges/Frame (4).png' />} name="Fast Reply" />
                    <BadgeItem icon={<img alt='' src='/src/assets/images/icons/badges/Frame (5).png' />} name="Repeat Helper" />
                    <BadgeItem icon={<img alt='' src='/src/assets/images/icons/badges/Frame (6).png' />} name="100% Success" />
                    </div>

                    <div className="achievements-list">
                    <AchievementItem text="Helped 25 People" />
                    <AchievementItem text="Contributed $5,200 total" />
                    <AchievementItem text="Helped 5 users more than once" />
                    <AchievementItem text="Replied Within 2 hours" />
                    <AchievementItem text="Helped 25 People" />
                    <AchievementItem text="Contributed $5,200 total" />
                    <AchievementItem text=" Helped 25 People"/>
                    </div>
                </>
                )}
            </div>
            </div>
        </div>
        </div>
    );
    };

