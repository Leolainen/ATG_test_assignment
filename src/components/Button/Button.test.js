import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  afterEach(cleanup);

  describe("events", () => {
    it("should fire onClick callback when clicked", () => {
      const mockFn = jest.fn();
      const { getByTestId } = render(<Button onClick={mockFn}>button</Button>);
      fireEvent.click(getByTestId("button"));

      expect(mockFn).toHaveBeenCalled();
    });
  });

  describe("Snapshots", () => {
    it("should render", () => {
      const { asFragment } = render(<Button>button</Button>);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
