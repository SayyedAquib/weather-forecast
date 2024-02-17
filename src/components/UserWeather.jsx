// UserWeather.js
import React from "react";
import cloud from "../assets/cloud.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import loadingGif from "../assets/loading.gif";
import notFound from "../assets/not-found.png";

const UserWeather = ({ weatherData, loading, error }) => {
  return (
    <div className="weather-container">
      {loading && (
        <div className="sub-container loading-container">
          <img src={loadingGif} alt="Loading..." />
        </div>
      )}
      {error && (
        <div className="sub-container api-error-container">
          <p>{error}</p>
          <img src={notFound} alt="Not Found" />
        </div>
      )}
      {weatherData && (
        <div className="sub-container user-info-container .weather-container.center">
          <div className="name">
            <p>{weatherData.name}</p>
            <img
              src={`https://flagcdn.com/144x108/${weatherData.sys.country.toLowerCase()}.png`}
              alt={weatherData.sys.country}
            />
          </div>
          <p>{weatherData.weather[0].main}</p>
          <img
            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
          <p>{weatherData.main.temp} °C</p>
          <div className="parameter-container">
            <div className="parameter">
              <img src={wind} alt="wind" />
              <p className="parameter-title">windspeed</p>
              <p className="parameter-value">{weatherData.wind.speed}m/s</p>
            </div>
            <div className="parameter">
              <img src={humidity} alt="humidity" />
              <p className="parameter-title">humidity</p>
              <p className="parameter-value">{weatherData.main.humidity}%</p>
            </div>
            <div className="parameter">
              <img src={cloud} alt="clouds" />
              <p className="parameter-title">clouds</p>
              <p className="parameter-value">{weatherData.clouds.all}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserWeather;
