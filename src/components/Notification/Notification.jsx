import React from "react";
import "./Notification.css";

const Notification = () => {
  const [showNotification, setShowNotification] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    });

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <div className={`notification ${showNotification ? 'show' : ''}`}>
      <a href="https://t.me/osutyumencup" target="_blank" rel="noopener noreferrer">
        Следите за обновлениями в телеграме
      </a>
      <button className="notification-close" onClick={handleClose}>
        ×
      </button>
    </div>
  );
};

export default Notification;