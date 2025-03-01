import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ children, isPublic = false }) => {
  const location = useLocation();
  const currentUser = localStorage.getItem("token");
  console.log("ffff",currentUser)
  console.log(isPublic)

  useEffect(() => {
    if (!currentUser && !isPublic && location.pathname) {
      toast.error("You must be logged in to access this page.");
    }
  }, [currentUser, isPublic, location.pathname]);

  if (!isPublic && !currentUser) {
    return <Navigate to="/" replace />;
  }

  if (isPublic && currentUser) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PrivateRoute;
