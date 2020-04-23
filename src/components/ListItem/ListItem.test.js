import React from "react";
import { render, cleanup } from "@testing-library/react";
import ListItem from "./ListItem";

describe("<ListItem />", () => {
  afterEach(cleanup);

  describe("Snapshots", () => {
    it("should render", () => {
      const { asFragment } = render(<ListItem>list item</ListItem>);

      expect(asFragment()).toMatchSnapshot();
    });

    it("should render without padding and divider", () => {
      const { asFragment } = render(
        <ListItem disablePadding disableDivider>
          list item
        </ListItem>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
