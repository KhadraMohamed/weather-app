import React from "react";
import PropTypes from "prop-types";

function ForecastDetails(props) {
  const { humidity, direction, windspeed, temperature, date } = props;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__date"> {formattedDate} </div>
      <div className="forecast-details__humidity"> {humidity} </div>
      <div className="forecast-details__windspeed"> {windspeed} </div>
      <div className="forecast-details__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__direction">{direction}</div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  humidity: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  windspeed: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
