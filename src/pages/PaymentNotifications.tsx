import React, { useState } from 'react';
import './PaymentNotifications.css';

interface Notification {
  id: number;
  message: string;
  timestamp: string;
  read: boolean;
}

const PaymentNotifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: 'Payment successful', timestamp: '10:45 AM', read: false },
    { id: 2, message: 'Transfer received', timestamp: '9:30 AM', read: false },
    { id: 3, message: 'Payment successful', timestamp: 'Yesterday, 3:15 PM', read: false },
  ]);

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      read: true,
    }));
    setNotifications(updatedNotifications);
  };

  return (
    <div className="payment-notifications-container">
      <div className="payment-header">
        <h2 className="payment-heading">Notifications</h2>
        <button className="mark-read-button" onClick={markAllAsRead}>
          Mark All as Read
        </button>
      </div>
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className={`notification-item ${notification.read ? 'read' : 'unread'}`}
          >
            <span className="notification-message">{notification.message}</span>
            <span className="notification-timestamp">{notification.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentNotifications;
