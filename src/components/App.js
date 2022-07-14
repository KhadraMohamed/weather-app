/* eslint-disable no-console */
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
  const [errorMessage, setErrorMessage] = useState("");

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  const getForecast = () => {
    let endpoint = "http://mcr-codes-weather-app.herokuapp.com/forecast";

    if (searchText) {
      endpoint += `?city=${searchText}`;
    }

    return axios
      .get(endpoint)
      .then((response) => {
        setSelectedDate(response.data.forecasts[0].date);
        setForecasts(response.data.forecasts);
        setLocation(response.data.location);
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 404) {
          console.error("Location is not valid", error);
        }
        if (status === 500) {
          console.error("Server error", error);
        }
        if (status === 404) {
          setErrorMessage("No such town or city, try again!");
          console.error("Location is not valid", error);
        }
        if (status === 500) {
          setErrorMessage("Oops, server error, try again later.");
          console.error("Server error", error);
        }
      });
  };
  useEffect(() => {
    getForecast();
  }, []);
  return (
    <div className="weather-app">
      <LocationDetails
        city={location.city}
        country={location.country}
        errorMessage={errorMessage}
      />
      <SearchForm
        getForecast={getForecast}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {!errorMessage && (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
}

export default App;
