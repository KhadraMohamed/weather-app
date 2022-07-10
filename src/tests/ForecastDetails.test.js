import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails", () => {
  const forecast = {
    date: 1111111,
    wind: {
      direction: "s",
      speed: 60,
    },
    humidity: 76,
    temperature: {
      min: 12,
      max: 22,
    },
  };
  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={forecast} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("render correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={forecast} />);

    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-details__date");
    expect(getByText("s")).toHaveClass("forecast-details__wind_direction");
    expect(getByText(60)).toHaveClass("forecast-details__wind_speed");
    expect(getByText(76)).toHaveClass("forecast-details__humidity");
    expect(getByText("22°C")).toHaveClass("forecast-details__temperature");
  });
});
