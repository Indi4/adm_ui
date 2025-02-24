import React from "react";
import useOnlineStatus from "./useOnlineStatus";
import NoInternetPage from "./NoInternetPage";

const withOfflineCheck = (WrappedComponent) => {
  return (props) => {
    const isOnline = useOnlineStatus();
    if (!isOnline) {
      return <NoInternetPage />;     }

    return <WrappedComponent {...props} />;
  };
};

export default withOfflineCheck;
