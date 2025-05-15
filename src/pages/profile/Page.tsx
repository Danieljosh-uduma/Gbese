
import './profile.css';
// Import the Sidebar component
import Sidebar from '../../components/Sidebar/Sidebar';
import Img from '../../assets/images/images/db51a0d15a178e33aa72ad690140b567642de318.png'

// Import icons from react-icons
import { 
  FaMedal, 
  FaTrophy, 
  FaCrown, 
  FaUsers, 
  FaBolt, 
  FaRedo, 
  FaCheckCircle,
  FaStar, 
  FaStarHalfAlt 
} from 'react-icons/fa';
import Header from '../../components/layout/Header/Header';
import { useEffect, useState } from 'react';
import { getProfileStat, getProfileStatForUser } from '../../services/marketplace';
import { useAuth } from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Stat } from '../../types/helpers';

const ProfilePage: React.FC = () => {
  const [stat, setStat] = useState({} as Stat)
  const { user, logout } = useAuth()
  const token = user?.token
  const location = useLocation()
  const id = location.state? location.state.id: undefined
  const navigate = useNavigate()
  
  
  useEffect(() => {
    if (!id) {
      getProfileStat(token).then(res => {
      if (res.success) {
        setStat(res.data)
      } else if (res.status === 401) {
        logout()
      }
    }).catch(err => console.log(err))
    } else if (id) {
      getProfileStatForUser(token, id).then(res => {
        if (res.success) {
        setStat(res.data)
        } else if (res.status === 401) {
          navigate('/')
        }
      })
    }
  }, [])
  // Component for profile picture
  const ProfilePicture: React.FC = () => {
    return (
      <div className="profile-pic-container">
        <img 
          src={Img}
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
    
    return <div className="profile-rating">{stars}</div>;
  };

  // Component for stat boxes
  interface StatBoxProps {
    number: number;
    label: string;
  }

  const StatBox: React.FC<StatBoxProps> = ({ number, label }) => {
    return (
      <div className="profile-stat-box">
        <div className="profile-stat-number">{number}</div>
        <div className="profile-stat-label">{label}</div>
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
        <FaTrophy className="achievement-icon" />
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
        <Header />

        <div className="profile-section">
          {/* Profile Header */}
          <div className="profile-header">
            <ProfilePicture />
            <h2 className="profile-name">{id? (location.state.name).toUpperCase() : user?.fullname.toUpperCase()}</h2>
            <p className="profile-username">{user?.acctNumber}</p>
            <div className='profile-rating'>
                <Rating score={4.5} />
            </div>
            <div className="user-type">{id? "Benefactor" : "Beneficiary"}</div>
          </div>

          {/* Statistics Section */}
          <h3 className="statistics-header">Statistics</h3>
          <div className="stats-container">
            <StatBox number={stat?.debtTransfers} label="Debt Transfers" />
            <StatBox number={stat?.helped} label="Helped" />
            <StatBox number={stat?.successRate} label="Success Rate" />
            <StatBox number={stat?.responseTime} label="Response Time" />
            <StatBox number={stat?.repeatCase} label="Repeat Cases" />
          </div>

          {/* Badges Section */}
          <div className="badges-section">
            <div className="badges-header">
              <FaMedal className="badge-icon" />
              <span className="badges-title">Badges</span>
              <span>&</span>
              <FaTrophy className="badge-icon" style={{ marginLeft: '10px' }} />
              <span className="badges-title">Achievements</span>
            </div>

            <div className="badges-container">
              <BadgeItem icon={<FaCrown />} name="Key Beneficiary" />
              <BadgeItem icon={<FaUsers />} name="Social Climber" />
              <BadgeItem icon={<FaBolt />} name="Fast Reply" />
              <BadgeItem icon={<FaRedo />} name="Repeat Beneficiary" />
              <BadgeItem icon={<FaCheckCircle />} name="100% Success" />
            </div>

            <div className="achievements-list">
              <AchievementItem text="Got Help From 40 People" />
              <AchievementItem text="Gotten ₦20,000 total" />
              <AchievementItem text="Gotten Help from 5 users more than once" />
              <AchievementItem text="Fast Responder" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;