import { useState } from "react";
import { TickSquare } from "../../../components/icons/Icon";
import "./RecentActivity.css";

type FilterType = "All" | "Accepted" | "Upcoming" | "Scheduled";

type Activity = {
  date: string;
  status: "Accepted" | "Upcoming" | "Scheduled";
  amount: string;
  from: string;
  tag: string;
};

const activities: Activity[] = [
  { date: "April 27, 2025", status: "Accepted", amount: "₦12,000", from: "Jamal Reed", tag: "#education" },
  { date: "May 10, 2025", status: "Upcoming", amount: "₦20,000", from: "Rachel Joe", tag: "#medical" },
  { date: "June 20, 2025", status: "Scheduled", amount: "₦50,000", from: "Martha Pope", tag: "#business" },
  { date: "April 27, 2025", status: "Accepted", amount: "₦12,000", from: "Jamal Reed", tag: "#education" },
  { date: "April 27, 2025", status: "Accepted", amount: "₦12,000", from: "Jamal Reed", tag: "#education" },
  { date: "June 20, 2025", status: "Scheduled", amount: "₦50,000", from: "Martha Pope", tag: "#business" },
  { date: "April 27, 2025", status: "Accepted", amount: "₦12,000", from: "Jamal Reed", tag: "#education" },
  { date: "May 10, 2025", status: "Upcoming", amount: "₦20,000", from: "Rachel Joe", tag: "#medical" },
  { date: "June 20, 2025", status: "Scheduled", amount: "₦50,000", from: "Martha Pope", tag: "#business" },
  { date: "May 10, 2025", status: "Upcoming", amount: "₦20,000", from: "Rachel Joe", tag: "#medical" },
  { date: "May 10, 2025", status: "Upcoming", amount: "₦20,000", from: "Rachel Joe", tag: "#medical" },
];

function RecentActivity() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("All");

  function handleBack(): void {
    alert("Back clicked");
  }

  function handleClose(): void {
    alert("Close clicked");
  }

  function handleFilterClick(filter: FilterType): void {
    setSelectedFilter(filter);
  }

  const filteredActivities = activities.filter((activity) =>
    selectedFilter === "All" ? true : activity.status === selectedFilter
  );

  return (
    <div className="modal-container">
      <div className="modal-header">
        <button className="icon-button" onClick={handleBack}>←</button>
        <div className="modal-title">Recent Activity</div>
        <button className="icon-button" onClick={handleClose}>✕</button>
      </div>

      <div className="filter-buttons">
        {["All", "Accepted", "Upcoming", "Scheduled"].map((filter) => (
          <div
            key={filter}
            className={`filter ${filter.toLowerCase()} ${selectedFilter === filter ? "active" : ""}`}
            onClick={() => handleFilterClick(filter as FilterType)}
          >
            {filter === "All" ? "All Activities" : filter}
          </div>
        ))}
      </div>

      <div className="activity-list">
        {filteredActivities.map((activity, index) => (
          <div className="activity-row" key={index}>
<div className="activity-date-wrapper">
  <div className={`status-square ${activity.status.toLowerCase()}`}>
        <TickSquare className="tick-icon" />


  </div>

  <span className="activity-date">{activity.date}</span>
</div>
            <span className={`activity-status ${activity.status.toLowerCase()}`}>{activity.status}</span>
            <span className="activity-desc">
              {activity.amount} debt from {activity.from}
            </span>
            <span className="activity-tag">{activity.tag}</span>
            <button className="view-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;
