import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Searchbar from "./Searchbar";

describe("<Searchbar />", () => {
  afterEach(cleanup);

  describe("events", () => {
    it("should fire onSearchClick callback when clicked", () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Searchbar onSearchClick={mockFn} />);
      fireEvent.click(getByTestId("button"));

      expect(mockFn).toHaveBeenCalled();
    });
  });

  describe("Snapshots", () => {
    it("should render", () => {
      const { asFragment } = render(<Searchbar />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
