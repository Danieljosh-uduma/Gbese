import React from "react";
import "./Successful.css";

const Successful: React.FC = () => {
 const handleClose = () => {
    // Replace this with navigation or modal close logic
    console.log("Close clicked");
  };
  return (
    <div className="debt-success-container">
      <div className="success-card">
        <button className="close-btn" onClick={handleClose}>×</button>
        <h2>Debt transfer accepted successfully</h2>
        <div className="success-icon">&#10003;</div>
       

        <button className="view-debts-btn">View My Accepted Debts</button>
      </div>
    </div>
  );
};

export default Successful;
