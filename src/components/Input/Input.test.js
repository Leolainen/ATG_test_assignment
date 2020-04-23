import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("<Input />", () => {
  afterEach(cleanup);

  it("should render label text", () => {
    const { getByText } = render(<Input label="label" />);
    const label = getByText("label");

    expect(label).toBeInTheDocument();
  });

  describe("CTA", () => {
    it("should render CTA", () => {
      const { getByText } = render(<Input cta={<button>click me</button>} />);
      const button = getByText("click me");

      expect(button).toBeInTheDocument();
    });

    it("should fire onClick callback when clicked", () => {
      const mockFn = jest.fn();
      const { getByText } = render(
        <Input cta={<button onClick={mockFn}>click me</button>} />
      );
      const button = getByText("click me");
      fireEvent.click(button);

      expect(mockFn).toHaveBeenCalled();
    });
  });

  describe("Snapshots", () => {
    it("should render default", () => {
      const { asFragment } = render(<Input />);

      expect(asFragment()).toMatchSnapshot();
    });

    it("should render with label and cta", () => {
      const { asFragment } = render(
        <Input label="label" cta={<button>click me</button>} />
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
