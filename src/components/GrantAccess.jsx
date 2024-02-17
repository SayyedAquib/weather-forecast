import React from "react";
import location from "../assets/location.png";

const GrantAccess = () => {
  return (
    <>
      <div className="sub-container grant-location-container">
        <img src={location} width="80" height="80" loading="lazy" />
        <p>Grant Location Access</p>
        <p data-messageText>Allow Access To Get Weather Information</p>
      </div>
    </>
  );
};

export default GrantAccess;
