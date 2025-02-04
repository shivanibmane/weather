import React, { useState } from "react";

const WeatherDetails = ({ weatherData }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  const currentDay = weekday[today.getDay()];
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let newformat = hours >= 12 ? "PM" : "AM";
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return (
    <>
      <div className="weather-info">
        <div className="city_img">
          <h2 className="city">
            {weatherData?.location?.name},{weatherData?.location?.region}
          </h2>
          <h4 id="date">
            {currentDay + ", " + hours + ":" + minutes + " " + newformat}
          </h4>
          <div className="weather_specific">
            <img
              src={weatherData?.current?.condition?.icon}
              className="weather_img"
            />
            <p className="weather_cond">
              {weatherData?.current?.condition?.text}
            </p>
          </div>
        </div>
        <div className="temp_humidity">
          <div>
            <p className="temp-title">Temperature</p>
            {isCelsius ? (
              <h3 className="temp" onClick={() => setIsCelsius(false)}>
                {Math.round(weatherData?.current?.temp_c) + "°C"}{" "}
              </h3>
            ) : (
              <h3 className="temp" onClick={() => setIsCelsius(true)}>
                {Math.round(weatherData?.current?.temp_f) + "°F"}{" "}
              </h3>
            )}
          </div>
          <div>
            <p className="humd-title">Humidity</p>
            <h3 className="humidity">{weatherData?.current?.humidity + "%"}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
