import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../Button";

describe("Button Component", () => {
  it("renders with correct text", () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });
  it("is disabled when disabled prop is true", () => {
    render(<Button label="Submit" disabled />);
    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toBeDisabled();
  });
  it("render with type submit", () => {
    render(<Button label="Submit" type="submit" />);
    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
});
