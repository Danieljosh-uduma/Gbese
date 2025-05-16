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
      <div className="sidebar-card ">
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
          <div className="info-row">
            <strong>Name:</strong>
            {isEditing ? (
              <input name="name" value={formData.name} onChange={handleChange} />
            ) : (
              <span>{formData.name}</span>
            )}
          </div>
          <div className="info-row">
            <strong>Email:</strong>
            {isEditing ? (
              <input name="email" value={formData.email} onChange={handleChange} />
            ) : (
              <span>{formData.email}</span>
            )}
          </div>
          <div className="info-row">
            <strong>Number:</strong>
            {isEditing ? (
              <input name="number" value={formData.number} onChange={handleChange} />
            ) : (
              <span>{formData.number}</span>
            )}
          </div>
          <div className="info-row">
            <strong>BVN:</strong>
            {isEditing ? (
              <input name="bvn" value={formData.bvn} onChange={handleChange} />
            ) : (
              <span>{formData.bvn}</span>
            )}
          </div>
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
        {/* Toggle button (only visible before menu is open) */}
        {!menuOpen && (
          <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
            ☰
          </button>
        )}

        {/* Slide-in menu (only visible when menu is open) */}
        <div className={`sidebar-card slide-menu ${menuOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            ✕
          </button>

          <div className="personal-info">
            <p>Personal Information</p>
            <div className="info-row">
              <strong>Name:</strong>
              {isEditing ? (
                <input name="name" value={formData.name} onChange={handleChange} />
              ) : (
                <span>{formData.name}</span>
              )}
            </div>
            <div className="info-row">
              <strong>Email:</strong>
              {isEditing ? (
                <input name="email" value={formData.email} onChange={handleChange} />
              ) : (
                <span>{formData.email}</span>
              )}
            </div>
            <div className="info-row">
              <strong>Number:</strong>
              {isEditing ? (
                <input name="number" value={formData.number} onChange={handleChange} />
              ) : (
                <span>{formData.number}</span>
              )}
            </div>
            <div className="info-row">
              <strong>BVN:</strong>
              {isEditing ? (
                <input name="bvn" value={formData.bvn} onChange={handleChange} />
              ) : (
                <span>{formData.bvn}</span>
              )}
            </div>
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
