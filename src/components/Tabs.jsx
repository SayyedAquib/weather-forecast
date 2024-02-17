// Tab.js
import React from "react";

const Tab = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="tab-container">
      <p
        className={`tab ${currentTab === "user" && "current-tab"}`}
        onClick={() => setCurrentTab("user")}
      >
        Your Weather
      </p>
      <p
        className={`tab ${currentTab === "search" && "current-tab"}`}
        onClick={() => setCurrentTab("search")}
      >
        Search Weather
      </p>
    </div>
  );
}

export default Tab;
