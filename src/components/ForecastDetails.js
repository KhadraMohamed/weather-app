import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { humidity, date, temperature, wind } = forecast;

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__date"> {formattedDate} </div>
      <div className="forecast-details__humidity"> {humidity} </div>
      <div className="forecast-details__wind_speed"> {wind.speed} </div>
      <div className="forecast-summary__minTemperature">
        Min: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__direction">{wind.direction}</div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
    humidity: PropTypes.number,
    direction: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};
