import React from "react";
import "./Successful.css";

const Successful: React.FC = () => {
  return (
    <div className="debt-success-container">
      <div className="success-card">
        <h2>Debt transfer accepted successfully</h2>
        <div className="success-icon">&#10003;</div>
       

        <button className="view-debts-btn">View My Accepted Debts</button>
      </div>
    </div>
  );
};

export default Successful;
