import React, { useState } from "react";
import { TickSquareAccepted,TickSquareUpcoming,TickSquareScheduled, MobileIconAccepted, MobileIconUpcoming, MobileIconScheduled,
 VectorIcon, CloseCircle, ArrowLeftIcon} from "../../components/icons/Icon";
import DebtAcceptedModal from "./DebtAcceptedModal";
import "./RecentActivity.css";

type FilterType = "All" | "Accepted" | "Upcoming" | "Scheduled";

type Activity = {
  date: string;
  status: "Accepted" | "Upcoming" | "Scheduled";
  amount: string;
  from: string;
  tag: string;
};

type RecentActivityProps = {
  closeModal: () => void;
};

const activities: Activity[] = [
  { date: "April 27, 2025", status: "Accepted", amount: "₦12,000", from: "Jamal Reed", tag: "#education" },
  { date: "May 10, 2025", status: "Upcoming", amount: "₦20,000", from: "Rachel Joe", tag: "#medical" },
  { date: "June 20, 2025", status: "Scheduled", amount: "₦50,000", from: "Martha Pope", tag: "#business" },
  { date: "April 27, 2025", status: "Accepted", amount: "₦12,000", from: "Jamal Reed", tag: "#education" },
  { date: "June 20, 2025", status: "Scheduled", amount: "₦50,000", from: "Martha Pope", tag: "#business" },
  { date: "April 27, 2025", status: "Accepted", amount: "₦12,000", from: "Jamal Reed", tag: "#education" },
  { date: "May 10, 2025", status: "Upcoming", amount: "₦20,000", from: "Rachel Joe", tag: "#medical" },
  { date: "May 10, 2025", status: "Upcoming", amount: "₦20,000", from: "Rachel Joe", tag: "#medical" },
  { date: "April 27, 2025", status: "Accepted", amount: "₦12,000", from: "Jamal Reed", tag: "#education" },
  { date: "May 10, 2025", status: "Upcoming", amount: "₦20,000", from: "Rachel Joe", tag: "#medical" },
  { date: "May 10, 2025", status: "Upcoming", amount: "₦20,000", from: "Rachel Joe", tag: "#medical" },
  { date: "June 20, 2025", status: "Scheduled", amount: "₦50,000", from: "Martha Pope", tag: "#business" },
  { date: "June 20, 2025", status: "Scheduled", amount: "₦50,000", from: "Martha Pope", tag: "#business" },
];

function RecentActivity({ closeModal }: RecentActivityProps) {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("All");
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const handleFilterClick = (filter: FilterType) => setSelectedFilter(filter);

  const filteredActivities = activities.filter((activity) =>
    selectedFilter === "All" ? true : activity.status === selectedFilter
  );

  const closeDetailsModal = () => setSelectedActivity(null);

  return (
    <>
      <div className="modal-container">
        <div className="modal-header">
          <div className="icon-image" onClick={closeModal} style={{ cursor: "pointer" }}>
            <VectorIcon />
          </div>
          <div className="mobile-icon-image" onClick={closeModal} style={{ cursor: "pointer" }}>
            <ArrowLeftIcon />
          </div>
          <div className="modal-title">Recent Activity</div>
          <div className="icon-image" onClick={closeModal} style={{ cursor: "pointer" }}>
            <CloseCircle />
          </div>
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
              {/* Icon Section */}
              <div className="status-icon">
                {activity.status === "Accepted" && <><div className="desktop-icon"><TickSquareAccepted /></div><div className="mobile-icon"><MobileIconAccepted /></div></>}
                {activity.status === "Upcoming" && <><div className="desktop-icon"><TickSquareUpcoming /></div><div className="mobile-icon"><MobileIconUpcoming /></div></>}
                {activity.status === "Scheduled" && <><div className="desktop-icon"><TickSquareScheduled /></div><div className="mobile-icon"><MobileIconScheduled /></div></>}
              </div>

              {/* Desktop View */}
              <div className="desktop-activity">
                <span className="activity-date">{activity.date}</span>
                <span className={`activity-status ${activity.status.toLowerCase()}`}>{activity.status}</span>
                <span className="activity-desc">{activity.amount} debt from {activity.from}</span>
                <span className="activity-tag">{activity.tag}</span>
                <button className="view-btn" onClick={() => setSelectedActivity(activity)}>View Details</button>
              </div>

              {/* Mobile View */}
              <div className="mobile-activity">
                <div className="mobile-left">
                  <div className="debt-from">Debt from {activity.from}</div>
                  <div className="debt-date">{activity.date}</div>
                </div>
                <div className="mobile-middle">
                  <div className="amount">{activity.amount}</div>
                  <div className={`status ${activity.status.toLowerCase()}`}>{activity.status}</div>
                </div>
                <div className="mobile-right">
                  <button className="mobile-view-btn" onClick={() => setSelectedActivity(activity)}>View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedActivity && <DebtAcceptedModal onClose={closeDetailsModal} />}
    </>
  );
}

export default RecentActivity;
