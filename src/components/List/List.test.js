import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import List from "./List";

describe("<List />", () => {
  afterEach(cleanup);

  describe("Snapshots", () => {
    it("should render", () => {
      const { asFragment } = render(<List>list</List>);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
