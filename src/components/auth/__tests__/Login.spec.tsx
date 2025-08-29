import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login";
import userEvent from "@testing-library/user-event";

describe("Login Component", () => {
  it("renser with no props", () => {
    render(<Login />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });
  it("renders with custom class names", () => {
    render(
      <Login
        formClassName="custom-form-class"
        inputClassName="custom-input-class"
        actionClassName="custom-action-class"
      />
    );
    const form = screen.getByRole("form");
    expect(form).toHaveClass("custom-form-class");
   const outerInputContainer = screen.getByRole("outerInputContainer");
    expect(outerInputContainer).toHaveClass("custom-input-class");
    const actionContainer = screen.getByRole("actionContainer");
    expect(actionContainer).toHaveClass("custom-action-class");

  });
});
