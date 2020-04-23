import React from "react";
import { render, cleanup } from "@testing-library/react";
import Results from "./Results";

describe("<Results />", () => {
  afterEach(cleanup);

  it("should say 'No results' by default", () => {
    const { getByText } = render(<Results />);
    const noResults = getByText("No results");

    expect(noResults).toBeInTheDocument();
  });

  it("should render loader when isLoading is true", () => {
    const { getByText } = render(<Results isLoading={true} />);
    const loading = getByText("Loading ...");

    expect(loading).toBeInTheDocument();
  });

  describe("Snapshots", () => {
    it("should render", () => {
      const { asFragment } = render(<Results>text</Results>);

      expect(asFragment()).toMatchSnapshot();
    });

    it("should render with results", () => {
      const { asFragment } = render(
        <Results betType={mockBetType} game={mockGame}>
          text
        </Results>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});

const mockBetType = "V4";

const mockGame = {
  id: "V4_2020-04-24_33_4",
  races: [
    {
      date: "2020-04-24",
      id: "2020-04-24_33_4",
      number: 4,
      startTime: "2020-04-24T13:29:00",
      track: {
        name: "Östersund",
      },
      starts: [
        {
          distance: 2140,
          driver: {
            firstName: "Per-Eric",
            id: 517313,
            lastName: "Hjerpe",
            license: "B-tränare: träna, köra",
            location: "Timrå",
          },
          horse: {
            name: "Antilia Brodda",
            trainer: {
              firstName: "Per-Eric",
              lastName: "Hjerpe",
            },
            pedigree: {
              father: {
                name: "Infinitif",
              },
            },
          },
        },
      ],
    },
  ],
};
