
import { useState } from "react";
import "./Sidebar.css";

function Sidebar() {

    const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/src/assets/images/icons/logo-main.svg" alt="Gbese Logo"  />
        <p>GBESE</p>
      </div>

      <nav className="nav-links">
        <a 
        href="#" 
        className={`nav-item ${activeTab === "dashboard" ? "active" : ""}`}
          onClick={() => setActiveTab("dashboard")}
        >
          <span className="icon">
            <img src={
                activeTab === "dashboard"
                ? "/src/assets/images/icons/dashboard-white.svg"
                : "/src/assets/images/icons/dashboard.svg"
            } alt="" />
          </span>
          Dashboard
        </a>

        <a 
        href="#" 
        className={`nav-item ${activeTab === "debt-transfer" ? "active" : ""}`}
          onClick={() => setActiveTab("debt-transfer")}
        >
          <span className="icon">
            <img src={
                activeTab === "debt-transfer"
                ? "/src/assets/images/icons/debt-transfer-white.svg"
                : "/src/assets/images/icons/debt-transfer.svg"
            } alt="" />
          </span>
          Debt Transfer
        </a>

        <a 
        href="#" 
        className={`nav-item ${activeTab === "request" ? "active" : ""}`}
          onClick={() => setActiveTab("request")}
        >
          <span className="icon">
            <img src="/src/assets/images/icons/request.svg" alt="" />
          </span>
          Request
        </a>

        <a 
        href="#" 
        className={`nav-item ${activeTab === "transactions" ? "active" : ""}`}
          onClick={() => setActiveTab("transactions")}
        >
          <span className="icon">
            <img src="/src/assets/images/icons/transaction.svg" alt="" />
          </span>
          Transaction History
        </a>
        <a 
        href="#"
        className={`nav-item ${activeTab === "marketplace" ? "active" : ""}`}
            onClick={() => setActiveTab("marketplace")}
        >
            <span className="icon">
                <img src={
                    activeTab === "marketplace"
                    ? "/src/assets/images/icons/market-white.svg"
                    : "/src/assets/images/icons/market.svg"
                } alt="" />
            </span>
            Marketplace
        </a>

        <a 
        href="#" 
        className={`nav-item ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          <span className="icon">
            <img src="/src/assets/images/icons/profile.svg" alt="" />
          </span>
          Profile
        </a>
      </nav>

      <div className="bottom-section">
     
        <a 
        href="#" 
        className={`nav-item ${activeTab === "help" ? "active" : ""}`}
          onClick={() => setActiveTab("help")}
        >
          <span className="icon">
            <img src="/src/assets/images/icons/help.svg" alt="" />
          </span>
          Help & Support
        </a>

        <a 
        href="#" 
        className={`nav-item ${activeTab === "settings" ? "active" : ""}`}
          onClick={() => setActiveTab("settings")}
        >
          <span className="icon">
            <img src="/src/assets/images/icons/setting.svg" alt="" />
          </span>
          Settings
        </a>
      </div>

    </div>
  );
}

export default Sidebar;
