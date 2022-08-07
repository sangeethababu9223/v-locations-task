import { render, screen } from "@testing-library/react";
import Locations from "./Locations";

const testData = [
  {
    metaTitle: "Front-End",
    title: "Valtech_",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
    image:
      "https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802_1280.jpg",
    link: "https://www.valtech.com/en-in/",
  },
];

describe("when Locations is rendering", () => {
  beforeEach(() => {});
  test("should render the same number of child components as the places passed.", () => {
    render(<Locations places={testData} />);
    const headLines = screen.getAllByRole("article");
    expect(headLines.length).toBe(1);
  });
  test("should not render child components if no places are passed correctly.", () => {
    render(<Locations places={[]} />);
    const headLines = screen.queryByRole("article");
    expect(headLines).toBe(null);
  });
});
