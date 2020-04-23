import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  describe("Snapshots", () => {
    it("should render", () => {
      const { asFragment } = render(<App>App</App>);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
