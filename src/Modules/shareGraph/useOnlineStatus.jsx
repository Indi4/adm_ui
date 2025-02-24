import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine); // Initial online status

  useEffect(() => {
        const handleOnline = () => {
      console.log("Online event fired");
      setIsOnline(true);
    };

    const handleOffline = () => {
      console.log("Offline event fired");
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
