/* eslint-disable import/no-duplicates */
import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../components/SearchForm";
import getForecast from "../components/App";
import searchText from "../components/App";
import setSearchText from "../components/App";

describe("SearchForm", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        getForecast={getForecast}
        searchText={searchText}
        setSearchText={setSearchText}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders button correctly", () => {
    const { getByText } = render(
      <SearchForm
        getForecast={getForecast}
        searchText={searchText}
        setSearchText={setSearchText}
      />
    );
    expect(getByText("Search")).toBeInstanceOf(HTMLButtonElement);
  });
});
