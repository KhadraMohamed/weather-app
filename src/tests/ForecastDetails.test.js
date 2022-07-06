import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    direction: "Stub direction",
    humidity: "76%",
    windspeed: "15",
    temperature: {
      min: 12,
      max: 22,
    },
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails
        date={validProps.date}
        direction={validProps.direction}
        humidity={validProps.humidity}
        temperature={validProps.temperature}
        windspeed={validProps.windspeed}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("render correct values for props", () => {
    const { getByText } = render(
      <ForecastDetails
        date={validProps.date}
        direction={validProps.direction}
        humidity={validProps.humidity}
        temperature={validProps.temperature}
        windspeed={validProps.windspeed}
      />
    );

    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-details__date");
    expect(getByText("Stub direction")).toHaveClass(
      "forecast-details__direction"
    );
    expect(getByText("76%")).toHaveClass("forecast-details__humidity");
    expect(getByText("22°C")).toHaveClass("forecast-details__temperature");
  });
});
