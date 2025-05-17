import React from "react";
import "./Successful.css";

const Successful: React.FC = () => {
 const handleClose = () => {
    // Replace this with navigation or modal close logic
    console.log("Close clicked");
  };
  return (
      <div className="modal-overlay">
      <div className="success-card modal-content">
        <button className="close-btn" onClick={handleClose}>×</button>
        <h2>Debt transfer accepted successfully</h2>
        <div className="success-icon">&#10003;</div>
       

        <button className="view-debts-btn">View My Accepted Debts</button>
      </div>
    </div>
  );
};

export default Successful;
