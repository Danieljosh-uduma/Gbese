import React, { useState } from "react";
import "./SelectPaymentMethod.css";

const paymentOptions = ["Credit Card", "PayPal", "Bank Transfer"];

const SelectPaymentMethod: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <div className="payment-method-container">
      <label htmlFor="payment-method">Payment Method</label>
      <select
        id="payment-method"
        value={selectedMethod}
        onChange={handleChange}
      >
        <option value="" disabled>
           Payment Method 
        </option>
        {paymentOptions.map((method) => (
          <option key={method} value={method}>
            {method}
          </option>
        ))}
      </select>

      {selectedMethod && (
        <p className="selected-info">You selected: {selectedMethod}</p>
      )}
    </div>
  );
};

export default SelectPaymentMethod;
