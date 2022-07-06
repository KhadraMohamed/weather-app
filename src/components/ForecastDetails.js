import React from "react";
import PropTypes from "prop-types";

function ForecastDetails(forecast) {
  const { humidity, direction, windspeed, temperature } = props;
  const formattedDate = new Date(date).toDateString();

  return <div className="forecast-details"> </div>;
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  formatteddate: PropTypes.number.isRequired,
  humidity: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  windspeed: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
