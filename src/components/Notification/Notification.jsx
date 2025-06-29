import React from "react";
import "./Notification.css";

const Notification = () => {
  const [showNotification, setShowNotification] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (showNotification && !isPaused) {
      const hideTimer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return () => clearTimeout(hideTimer);
    }
  }, [showNotification, isPaused]);

  const handleClose = () => {
    setShowNotification(false);
  };

  return (
    <div 
      className={`notification ${showNotification ? 'show' : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      Следите за обновлениями в <a href="https://t.me/osutyumencup" target="_blank">телеграме</a>
      <button className="notification-close" onClick={handleClose}>
        ×
      </button>
    </div>
  );
};

export default Notification;