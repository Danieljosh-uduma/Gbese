import React from 'react';
import StepIndicator from '../../components/Kyc/Navbar/StepIndicator';
import StepNavigation from '../../components/Kyc/Navbar/StepNavigation';
import './AddressVerificatio.css'; // ✅ Fixed typo in filename
import Sidebar from '../../components/Kyc/Sidebar/KycSideCard';
import { DocumentUpload } from '../../components/icons/Icon'; // ✅ corrected typo

class UploadBox extends React.Component {
  fileInputRef = React.createRef<HTMLInputElement>();

  handleClick = () => {
    if (this.fileInputRef.current) {
      this.fileInputRef.current.click();
    }
  };

  handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      // Optional: Handle file logic
      console.log('Dropped file:', file);
    }
  };

  handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  render() {
    return (
      <div
        className="upload-box"
        onClick={this.handleClick}
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}
      >
        <DocumentUpload className="upload-icon" />
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          ref={this.fileInputRef}
          style={{ display: 'none' }}
        />
        <p>Click to upload or drag and drop</p>
        <p>PDF, JPG or PNG (Max. 5MB)</p>

                {/* <div className="file-input-wrapper">
          <label htmlFor="fileInput">Or choose file manually:</label>
          <input
            type="file"
            id="fileInput"
            accept=".pdf,.jpg,.jpeg,.png"
            ref={this.fileInputRef}
          />
        </div> */}

      </div>
       
       

    );
  }
}

const AddressVerification = () => {
  return (
    <div className="kyc-page">
      {/* ✅ Top Purple Navigation Bar */}
      <StepNavigation />

      <div className="kyc-container">
        <Sidebar />

        <div className="kyc-content">
          {/* ✅ Step Indicator (BVN, Address, Review) */}
          <StepIndicator activeStep={1} />

          {/* ✅ Address Verification Card */}
          <div className="address-card">
            <div className="address-verification-card">
              <p className="address-head">Address Verification</p>

              <p className="address-note">
                Please provide your current residential address and upload proof of address document.
                Acceptable documents include utility bills, bank statement or government-issued IDs.
              </p>

              <form>
                <label htmlFor="residentialAddress">Residential Address</label>
                <input
                  type="text"
                  id="residentialAddress"
                  placeholder="Enter your full address"
                  className="address-input"
                />

                <label>Upload proof of Address</label>
                <UploadBox />
              </form>
            </div>

            {/* ✅ Navigation Buttons */}
            <div className="form-buttons">
              <button className="back-btn">← Back</button>
              <button className="nexts-btn">Next →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressVerification;
