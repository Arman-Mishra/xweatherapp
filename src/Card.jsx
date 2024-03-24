import React from "react";
import "./card.css";

const Card = ({ searchData }) => {
  return (
    <div className="card">
      <div className="weather-card">
        <h3>Temperature</h3>
        <p>{searchData.temp_c}°C</p>
      </div>
      <div className="weather-card">
        <h3>Humidity</h3>
        <p>{searchData.humidity}%</p>
      </div>
      <div className="weather-card">
        <h3>Condition</h3>
        <p>{searchData.condition.text}</p>
      </div>
      <div className="weather-card">
        <h3>Wind Speed</h3>
        <p>{searchData.gust_kph} kph</p>
      </div>
    </div>
  );
};

export default Card;
