import React from 'react';
import noInternet from "../../assets/images/noInternet.svg"
const NoInternetPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>No Internet Connection</h1>
      <p>Please check your internet connection and try again.</p>
      
      {/* Add the image here */}
      <img 
        src={noInternet}
        alt="No Internet" 
        style={{ maxWidth: '300px', marginTop: '20px' }} 
      />
    </div>
  );
};

export default NoInternetPage;
