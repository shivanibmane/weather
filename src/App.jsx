import { useEffect, useState } from "react";
import "./App.css";
import WeatherDetails from "./components/WeatherDetails";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [iserror, setIsError] = useState(false);

  const handleOnclick = () => {
    const fetchWeatherData = async () => {
      if (input === "") {
        return;
      }
      try {
        const respnonse = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=71ea89963e97461d9c231557250302&q=${input}&aqi=yes`
        );
        const data = await respnonse.data;
        setWeatherData(data);
        setInput("");
        setIsError(false);
      } catch (e) {
        setIsError(true);
        setWeatherData("");
        setError("No matching location found");
      }
    };
    fetchWeatherData();
  };
  return (
    <>
      <section className="main-container">
        <div className="weather-container">
          <h1 className="heading">Weather</h1>
          <div className="weather-search">
            <input
              type="text"
              placeholder="Check your city weather"
              id="input"
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button id="search_btn" onClick={handleOnclick}>
              Search
            </button>
          </div>
          {weatherData && (
            <WeatherDetails weatherData={weatherData} error={error} />
          )}
          {iserror && <h3 className="error_msg">{error}</h3>}
        </div>
      </section>
    </>
  );
}

export default App;
