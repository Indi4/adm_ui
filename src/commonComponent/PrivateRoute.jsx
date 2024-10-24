import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAuthToken } from "../store/authentication/authSlice";

const PrivateRoute = ({ children }) => {
  const { accessToken } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    // Extracting possible token or params from the URL (assuming reset generates a token or signal to log in)
    const queryParams = new URLSearchParams(location.search);
    const resetSuccess = queryParams.get("resetSuccess");

    if (resetSuccess) {
      // If token is provided after resetting password
      const newToken = queryParams.get("token");
      if (newToken) {
        localStorage.setItem("accessToken", newToken);
        dispatch(setAuthToken(newToken));
      }
    }

    if (token && !accessToken) {
      dispatch(setAuthToken(token)); // Set token in Redux
    }

    setLoading(false);
  }, [accessToken, location.search, dispatch]);

  useEffect(() => {
    if (!accessToken && !loading) {
      if (
        location.pathname !== "/main" &&
        location.pathname !== "/forgotpassword" &&
        location.pathname !== "/resetpassword/"
      ) {
        toast.error("You must be logged in to access this page.");
      }
    }
  }, [accessToken, loading, location.pathname]);

  // Redirect if not authenticated and not accessing specific pages
  if (!accessToken && !loading) {
    if (
      location.pathname !== "/forgotpassword" &&
      location.pathname !== "/resetpassword/"
    ) {
      return <Navigate to="/main" />;
    }
  }

  // Show a loader or spinner while loading
  if (loading) {
    return null; // Add a spinner component if needed
  }

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default PrivateRoute;
