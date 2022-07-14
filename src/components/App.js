/* eslint-disable  no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import "../styles/App.css";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  const getForecast = () => {
    let endpoint = "http://mcr-codes-weather-app.herokuapp.com/forecast";

    if (searchText) {
      endpoint += `?city=${searchText}`;
    }

    return axios.get(endpoint).then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    });
  };
  useEffect(() => {
    getForecast();
  }, []);
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm
        getForecast={getForecast}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}

export default App;
