import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import NotificationCard from './NotificationCard';

function Notification() {
  const notifications = useSelector((state) => state.data.notifications);

  return createPortal(
    <>
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} {...notification} />
      ))}
    </>,
    document.getElementById('notification')
  );
}

export default Notification;
