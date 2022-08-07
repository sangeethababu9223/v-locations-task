import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("when everything is ok", () => {
  test("should load valtech container", () => {
    render(<Main />);
    const container = screen.getByTestId("valtechContainer");
    expect(container).toBeInTheDocument();
  });
});
