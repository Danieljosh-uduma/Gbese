    import { useState, useEffect } from 'react';
    import { Star, Award, Users, Clock, RefreshCw, BarChart2, ChevronLeft, ChevronRight } from 'lucide-react';
    import './ProfilePage.css';

    export default function ProfilePage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [user] = useState({
        name: "Margaret Okoye",
        username: "@User234567",
        profilePic: "/api/placeholder/120/120",
        role: "Beneficiary",
        rating: 4.5,
        stats: {
        debtTransfers: 42,
        helpers: 40,
        successRate: "92%",
        responseTime: "2h",
        repeatCases: 10
        },
        badges: [
        { name: "Key Beneficiary", icon: <Award size={20} className="text-yellow-500" /> },
        { name: "Social Climber", icon: <Users size={20} className="text-yellow-500" /> },
        { name: "Fast Reply", icon: <Clock size={20} className="text-yellow-500" /> },
        { name: "Repeat Beneficiary", icon: <RefreshCw size={20} className="text-yellow-500" /> },
        { name: "100% Success", icon: <Star size={20} className="text-yellow-500" /> }
        ],
        achievements: [
        "Got Help From 40 People",
        "Gotten ₦200,000 total",
        "Gotten Help from 5 users more than once"
        ]
    });

    // Function to render star rating (filled and unfilled stars)
    // Function for carousel navigation
    const nextSlide = () => {
        setCurrentSlide((prev) => 
        prev === user.achievements.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => 
        prev === 0 ? user.achievements.length - 1 : prev - 1
        );
    };

    // Auto-advance the carousel
    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide();
        }, 5000); // Change slide every 5 seconds
        
        return () => clearInterval(interval);
    }, [currentSlide]);

    // Function to render star rating (filled and unfilled stars)
    const renderRating = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(<Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />);
        } else if (i === fullStars && hasHalfStar) {
            stars.push(
            <div key={i} className="star-container">
                <Star size={20} className="text-yellow-500" />
                <div className="half-star">
                <Star size={20} className="text-yellow-500 fill-yellow-500" />
                </div>
            </div>
            );
        } else {
            stars.push(<Star key={i} size={20} className="text-yellow-500" />);
        }
        }
        
        return (
        <div className="star-rating">
            {stars}
        </div>
        );
    };

    return (
        <div className="profile-layout">
        {/* Sidebar */}
        <div className="sidebar">
            <div className="sidebar-header">
            <div className="logo-container">
                <div className="logo">C</div>
                <span className="logo-text">GBESE</span>
            </div>
            </div>
            
            <nav className="sidebar-nav">
            <div className="nav-container">
                <NavItem icon={<BarChart2 size={20} />} label="Dashboard" />
                <NavItem icon={<RefreshCw size={20} />} label="Debt Transfer" />
                <NavItem icon={<Clock size={20} />} label="Request" />
                <NavItem icon={<Award size={20} />} label="Transaction History" />
                <NavItem icon={<Users size={20} />} label="Market Place" active />
                <NavItem icon={<Award size={20} />} label="Profile" />
                <NavItem icon={<Award size={20} />} label="Help & Support" />
                <NavItem icon={<Award size={20} />} label="Settings" />
            </div>
            </nav>
        </div>
        
        {/* Main content */}
        <div className="main-content">
            {/* Header with purple gradient */}
            <div className="header-gradient"></div>
            
            {/* Profile content */}
            <div className="profile-container">
            {/* Profile header */}
            <div className="profile-header">
                <div className="profile-pic-container">
                <img 
                    src={user.profilePic} 
                    alt={user.name} 
                    className="profile-pic"
                />
                </div>
                <h1 className="profile-name">{user.name}</h1>
                <p className="profile-username">{user.username}</p>
                <div className="rating-container">
                {renderRating(user.rating)}
                </div>
                <div>
                <span className="role-badge">
                    {user.role}
                </span>
                </div>
            </div>
            
            {/* Statistics */}
            <div>
                <h2 className="section-title">Statistics</h2>
                <div className="stats-grid">
                <StatCard value={user.stats.debtTransfers} label="Debt Transfers" />
                <StatCard value={user.stats.helpers} label="Helpers" />
                <StatCard value={user.stats.successRate} label="Success Rate" />
                <StatCard value={user.stats.responseTime} label="Response Time" />
                <StatCard value={user.stats.repeatCases} label="Repeat Cases" />
                </div>
            </div>
            
            {/* Badges & Achievements */}
            <div>
                <div className="section-header">
                <h2 className="section-title">Badges</h2>
                <span className="section-divider">&</span>
                <div className="flex items-center">
                    <Award size={20} className="text-yellow-500 mr-1" />
                    <h2 className="section-title">Achievements</h2>
                </div>
                </div>
                
                {/* Badges */}
                <div className="badges-grid">
                {user.badges.map((badge, index) => (
                    <div key={index} className="badge-item">
                    <div className="badge-icon">
                        {badge.icon}
                    </div>
                    <span className="badge-name">{badge.name}</span>
                    </div>
                ))}
                </div>
                
                {/* Achievements Carousel */}
                <div className="achievements-carousel">
                <div 
                    className="carousel-container" 
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {user.achievements.map((achievement, index) => (
                    <div key={index} className="achievement-item">
                        <Award size={20} className="achievement-icon text-yellow-500" />
                        <span className="achievement-text">{achievement}</span>
                    </div>
                    ))}
                </div>
                
                <div className="carousel-arrow prev" onClick={prevSlide}>
                    <ChevronLeft size={16} />
                </div>
                
                <div className="carousel-arrow next" onClick={nextSlide}>
                    <ChevronRight size={16} />
                </div>
                
                <div className="carousel-controls">
                    {user.achievements.map((_, index) => (
                    <div 
                        key={index}
                        className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                    ))}
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }

    // Navigation item component for sidebar
    function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
    return (
        <div className={`nav-item ${active ? 'active' : ''}`}>
        <div className="nav-icon">
            {icon}
        </div>
        <span>{label}</span>
        </div>
    );
    }

    // Stat card component
    function StatCard({ value, label }: { value: string | number; label: string }) {
    return (
        <div className="stat-card">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
        </div>
    );
    }