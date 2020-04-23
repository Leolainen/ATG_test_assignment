import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Collapse from "./Collapse";

describe("<Collapse />", () => {
  afterEach(cleanup);

  it("should render label text", () => {
    const { getByText } = render(<Collapse label="label">collapse</Collapse>);
    const label = getByText("label");

    expect(label).toBeInTheDocument();
  });

  describe("Snapshots", () => {
    it("should render as collapsed", () => {
      const { asFragment } = render(<Collapse>collapse</Collapse>);

      expect(asFragment()).toMatchSnapshot();
    });

    it("should render as expanded", () => {
      const { asFragment, getByTestId } = render(<Collapse>collapse</Collapse>);
      fireEvent.click(getByTestId("collapse-header"));

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
