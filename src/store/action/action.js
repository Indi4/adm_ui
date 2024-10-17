// import axios from "axios";
// import config from "../../config";

// const BASE_URL = config.apiUrl;

// const sanitizeUrl = (url) => {
//   return url.startsWith("/") ? url.slice(1) : url;
// };

// export const callCommonGetAPI = (endPoint, title, params = {}) => {
//   return (dispatch) => {
//     axios
//       .get(`${BASE_URL}/${sanitizeUrl(endPoint)}`, { params })
//       .then((res) => {
//         dispatch(handleCommonApiSuccess(res.data, title, "Get"));
//       })
//       .catch((err) => {
//         dispatch(handleFailure(err));
//       });
//   };
// };

// export const callCommonSaveAPI = (endPoint, payLoad, title) => {
//   return (dispatch) => {
//     axios
//       .post(`${BASE_URL}/${sanitizeUrl(endPoint)}`, payLoad)
//       .then((res) => {
//         let data = res.data;
//         dispatch(handleCommonApiSuccess(data, title, "save"));
//       })
//       .catch((err) => {
//         dispatch(handleFailure(err.response));
//       });
//   };
// };

// export const callCommonUpdateAPI = (endPoint, payLoad, title) => {
//   return (dispatch) => {
//     axios
//       .put(`${BASE_URL}/${sanitizeUrl(endPoint)}`, payLoad)
//       .then((res) => {
//         let data = res.data;
//         dispatch(handleCommonApiSuccess(data, title, "update"));
//       })
//       .catch((err) => {
//         dispatch(handleFailure(err));
//       });
//   };
// };

// export const callCommonDeletAPI = (endPoint, title) => {
//   return (dispatch) => {
//     axios
//       .delete(`${BASE_URL}/${sanitizeUrl(endPoint)}`)
//       .then((res) => {
//         dispatch(handleCommonApiSuccess(res.data, title, "Delete"));
//       })
//       .catch((err) => {
//         dispatch(handleFailure(err));
//       });
//   };
// };

import axios from "axios";
import config from "../../config";
const BASE_URL = config.apiUrl;

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
});

const sanitizeUrl = (url) => {
  return url.startsWith("/") ? url.slice(1) : url;
};
// Function to retrieve access token from local storage or another secure place
const getAccessToken = () => localStorage.getItem("accessToken");
// axios.defaults.headers.common["Authorization"] = `Bearer ${getAccessToken()}`;

export const handleCommonApiSuccess = (data, title, action) => {
  return {
    type: "COMMON_" + action.toUpperCase(),
    payload: data,
    title,
  };
};

const handleFailure = (err) => {
  return {
    type: "FAILURE_MESSAGE",
    payload: err.data,
  };
};
const handleRefreshProps = (title) => {
  return {
    type: "REFRESH_PROPS",
    title,
  };
};
export const callCommonRefreshProps = (title) => {
  return (dispatch) => {
    dispatch(handleRefreshProps(title));
  };
};
// Function to refresh the access token
const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    const response = await axios.post(`${BASE_URL}/users/token/refresh/`, {
      refresh: refreshToken,
    });
    const newAccessToken = response.data.access;
    localStorage.setItem("accessToken", newAccessToken);
    return newAccessToken;
  } catch (error) {
    // Handle refresh token expiration, redirect to login, etc.
    console.error("Failed to refresh token", error);

    // Check if the error is related to the refresh token (e.g., invalid or expired)
    if (error.response && error.response.status === 400) {
      // Clear the local storage (or just tokens) and redirect to login
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      // Redirect to the login page
      window.location.href = "/main"; // You can modify this to your actual login route
    }

    throw error;
  }
};

// Request interceptor to add the access token to the headers
api.interceptors.request.use(
  async (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token expiration and refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Check if the error is due to an expired token
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshAccessToken();
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newAccessToken}`;
        return api(originalRequest); // Retry the original request with the new token
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export const callCommonGetAPI = (endPoint, title, params = {}) => {
  return (dispatch) => {
    api
      .get(`/${sanitizeUrl(endPoint)}`, { params })
      .then((res) => {
        dispatch(handleCommonApiSuccess(res.data, title, "Get"));
      })
      .catch((err) => {
        dispatch(handleFailure(err));
      });
  };
};

export const callCommonSaveAPI = (endPoint, payLoad, title) => {
  return (dispatch) => {
    api
      .post(`/${sanitizeUrl(endPoint)}`, payLoad)
      .then((res) => {
        dispatch(handleCommonApiSuccess(res.data, title, "Save"));
      })
      .catch((err) => {
        dispatch(handleFailure(err.response));
      });
  };
};

export const callCommonUpdateAPI = (endPoint, payLoad, title) => {
  return (dispatch) => {
    api
      .put(`/${sanitizeUrl(endPoint)}`, payLoad)
      .then((res) => {
        dispatch(handleCommonApiSuccess(res.data, title, "Update"));
      })
      .catch((err) => {
        dispatch(handleFailure(err));
      });
  };
};

export const callCommonDeleteAPI = (endPoint, title) => {
  return (dispatch) => {
    api
      .delete(`/${sanitizeUrl(endPoint)}`)
      .then((res) => {
        dispatch(handleCommonApiSuccess(res.data, title, "Delete"));
      })
      .catch((err) => {
        dispatch(handleFailure(err));
      });
  };
};
