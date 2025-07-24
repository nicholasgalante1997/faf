import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import { donateContent } from "../content/donate";

function Donate() {
  return (
    <div className="page donate-page">
      <div className="container">
        <ReactMarkdown>{donateContent}</ReactMarkdown>

        <div className="donation-form-section">
          <div className="donation-form-placeholder">
            <h3>🎁 Donation Form</h3>
            <p>Integration with payment processor would go here</p>
            <div className="form-buttons">
              <button className="btn btn-primary">$25</button>
              <button className="btn btn-primary">$50</button>
              <button className="btn btn-primary">$100</button>
              <button className="btn btn-outline">Custom Amount</button>
            </div>
            <div className="payment-methods">
              <p>💳 Credit Card | 🏦 Bank Transfer | ₿ Crypto | 📱 PayPal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Donate);
