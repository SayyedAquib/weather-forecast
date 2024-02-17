import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import UserWeather from "./components/UserWeather";
import SearchWeather from "./components/SearchWeather";
import useWeatherData from "./hooks/useWeatherData";
import GrantAccess from "./components/GrantAccess";

function App() {
  const [currentTab, setCurrentTab] = useState("user");
  const [userCoordinates, setUserCoordinates] = useState(null);
  const [searchCity, setSearchCity] = useState("");

  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (currentTab === "user" && !userCoordinates) {
      const getUserCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
          ({ coords }) => setUserCoordinates(coords),
          (error) => console.error(error.message)
        );
      };
      getUserCoordinates();
    }
  }, [currentTab, userCoordinates]);

  useEffect(() => {
    if (userCoordinates) {
      const { latitude, longitude } = userCoordinates;
      const url = `${BASE_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
      fetchWeatherData(url);
    }
  }, [userCoordinates]);

  const { weatherData, loading, error, fetchWeatherData } = useWeatherData();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchCity.trim()) return;
    const url = `${BASE_URL}q=${searchCity}&appid=${API_KEY}&units=metric`;
    fetchWeatherData(url);
    setCurrentTab("user");
    setSearchCity("");
  };

  return (
    <>
      <Header />
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {(!userCoordinates || !searchCity) && <GrantAccess />}

      {currentTab === "user" && (
        <UserWeather
          weatherData={weatherData}
          loading={loading}
          error={error}
        />
      )}
      {currentTab === "search" && (
        <SearchWeather
          handleSearch={handleSearch}
          searchCity={searchCity}
          setSearchCity={setSearchCity}
        />
      )}
    </>
  );
}

export default App;
