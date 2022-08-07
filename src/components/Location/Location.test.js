import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Location from "./Location";
const testData = {
  metaTitle: "Front-End",
  title: "Valtech_",
  description: "Test Data ",
  image: "https://cdn.pixabay.com/photo/2020/03/03/20/31/boat-4899802_1280.jpg",
  link: "https://www.valtech.com/en-in/",
};
describe("When Location loads without issues", () => {
  test("Should show details on hover on location item", async () => {
    render(<Location place={testData} index={1} />);
    fireEvent.mouseOver(screen.getByRole("article"));
    await waitFor(() => screen.findByTestId("valtechDetails"));
    expect(screen.getByText(/Front-End/)).toBeInTheDocument();
    expect(screen.getByText(/Valtech_/)).toBeInTheDocument();
    expect(screen.getByText(/Test Data/)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://www.valtech.com/en-in/"
    );
  });
});
