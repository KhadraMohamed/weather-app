import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import forecast from "../data/forecast.json";

describe("App", () => {
  test("renders App component correctly", () => {
    render(
      <App
        location={forecast.location}
        forecasts={forecast.forecasts}
        forecastDetails={forecast[0]}
      />
    );
    const h1Element = screen.getByText(/Leeds, UK/i);
    expect(h1Element).toBeInTheDocument();
  });
});
