import axios from 'axios';
import config from "../config";

const BASE_URL = config.apiUrl;

// Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to sanitize URL (removes leading slash)
const sanitizeUrl = (url) => {
  return url.startsWith('/') ? url.slice(1) : url;
};

// Add a request interceptor to include the access token
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken'); // Assuming accessToken is stored in localStorage

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`; // Attach the token to Authorization header
    }
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type']; // Let the browser set the Content-Type
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor to handle token expiration and refresh logic
axiosInstance.interceptors.response.use(
  (response) => {
    // Return response if successful
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to an expired token (example: 401 status code)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Call the refresh token API (you'll need to replace this with your actual refresh token logic)
        const refreshToken = localStorage.getItem('refreshToken'); // Assuming token is stored in localStorage
        const tokenResponse = await axios.post(`${BASE_URL}/users/token/refresh/`, { refresh: refreshToken });

        // Save new tokens
        const { accessToken } = tokenResponse.data;
        localStorage.setItem('accessToken', accessToken);

        // Update the Authorization header with the new access token
        axiosInstance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        // Retry the original request with the new token
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Handle error during token refresh (optional: redirect to login, etc.)
        console.error('Token refresh failed:', refreshError);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = '/main';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// API service using axios instance
const apiService = {
  get: (url) => axiosInstance.get(sanitizeUrl(url)),

  post: (url, data) => axiosInstance.post(sanitizeUrl(url), data),

  put: (url, data) => axiosInstance.put(sanitizeUrl(url), data),

  delete: (url) => axiosInstance.delete(sanitizeUrl(url)),

  update: (url, data) => axiosInstance.put(sanitizeUrl(url), data),
};

export default apiService;
