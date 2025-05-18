import React, { useState } from 'react';
import { Frame1, EditIcon, FrameTierIcon, CameraIcon } from '../../icons/Icon';
import { MdAccessTime } from 'react-icons/md';
import './KycSideCard.css';

function SidebarCard() {
  const [isEditing, setIsEditing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Margaret Okoye',
    email: 'Margaretokoye21@gmail.com',
    number: '+234 8067 746 832',
    bvn: '624*****832',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <>
      {/* Desktop View */}
      <div className="desktop-only">
        <div className="sidebar-card">
          <div className="profile-pics-wrapper">
            <div className="profile-pics">
              <Frame1 />
            </div>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              id="camera-upload-desktop"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
            <label htmlFor="camera-upload-desktop" className="camera-icon">
              <CameraIcon />
            </label>
          </div>

          <h3 className="center-name">{formData.name}</h3>

          <p className="tier">
            <FrameTierIcon className="icon" />
            Tier
          </p>

          <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
            {!isEditing && <EditIcon className="edit-icon" />}
            {isEditing ? 'Save' : 'Edit'}
          </button>

          <div className="personal-info">
            <p>Personal Information</p>
            {['name', 'email', 'number', 'bvn'].map((field) => (
              <div className="info-row" key={field}>
                <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>
                {isEditing ? (
                  <input name={field} value={formData[field as keyof typeof formData]} onChange={handleChange} />
                ) : (
                  <span>{formData[field as keyof typeof formData]}</span>
                )}
              </div>
            ))}
            <div className="info-row">
              <strong>KYC Status:</strong>
              <div className="status pending">
                <MdAccessTime className="status-icon" />
                <span>Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="mobile-only">
        {!menuOpen && (
          <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
            ☰
          </button>
        )}

        <div className={`sidebar-card slide-menu ${menuOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            ✕
          </button>

          <div className="profile-pics-wrapper">
            <div className="profile-pics">
              <Frame1 />
            </div>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              id="camera-upload-mobile"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
            <label htmlFor="camera-upload-mobile" className="camera-icon">
              <CameraIcon />
            </label>
          </div>

          <h3 className="center-name">{formData.name}</h3>

          <p className="tier">
            <FrameTierIcon className="icon" />
            Tier
          </p>

          <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
            {!isEditing && <EditIcon className="edit-icon" />}
            {isEditing ? 'Save' : 'Edit'}
          </button>

          <div className="personal-info">
            <p>Personal Information</p>
            {['name', 'email', 'number', 'bvn'].map((field) => (
              <div className="info-row" key={field}>
                <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong>
                {isEditing ? (
                  <input name={field} value={formData[field as keyof typeof formData]} onChange={handleChange} />
                ) : (
                  <span>{formData[field as keyof typeof formData]}</span>
                )}
              </div>
            ))}
            <div className="info-row">
              <strong>KYC Status:</strong>
              <div className="status pending">
                <MdAccessTime className="status-icon" />
                <span>Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarCard;
