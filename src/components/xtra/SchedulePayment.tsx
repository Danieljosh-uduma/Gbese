import React, { useState } from "react";
import "./SchedulePayment.css";

const SchedulePayment: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("pay-now");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="schedule-payment">
      <label className="group-label">Schedule Payment</label>

      <div className="radio-grid">
        <label className={`radio-option ${selectedOption === "pay-now" ? "selected" : ""}`}>
          <input
            type="radio"
            name="payment-schedule"
            value="pay-now"
            checked={selectedOption === "pay-now"}
            onChange={handleChange}
          />
          Pay Now
        </label>

        <label className={`radio-option ${selectedOption === "custom" ? "selected" : ""}`}>
          <input
            type="radio"
            name="payment-schedule"
            value="custom"
            checked={selectedOption === "custom"}
            onChange={handleChange}
          />
          Custom Payment Schedule
        </label>

        <label className={`radio-option ${selectedOption === "due-date" ? "selected" : ""}`}>
          <input
            type="radio"
            name="payment-schedule"
            value="due-date"
            checked={selectedOption === "due-date"}
            onChange={handleChange}
          />
          Pay on Due Date
        </label>
      </div>

      <p className="disclaimer">
  * Figma ipsum component variant main layer. Move subtract scrolling opacity line. Overflow export rectangle variant style. Thumbnail flows plugin duplicate follower undo. Effect auto blur blur community group auto.
</p>

<div className="terms-container">
  <label>
    <input type="checkbox" /> I agree to the <a href="#" style={{textDecoration: 'none'}}><span>terms and conditions</span></a>
  </label>
</div>

    </div>
  );
};

export default SchedulePayment;
