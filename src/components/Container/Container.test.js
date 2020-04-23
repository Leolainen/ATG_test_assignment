import React from "react";
import { render, cleanup } from "@testing-library/react";
import Container from "./Container";

describe("<Container />", () => {
  afterEach(cleanup);

  describe("Snapshots", () => {
    it("should render", () => {
      const { asFragment } = render(<Container>container</Container>);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
