import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../Input";

describe("Input Component", () => {
  it("render with placeholder and type", () => {
    render(<Input placeholder="Enter text" type="text" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });
  it("render with type password", () => {
    render(<Input placeholder="Enter password" type="password" />);
    const inputElement = screen.getByPlaceholderText("Enter password");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "password");
  });
  it("render with error message", () => {
    render(<Input placeholder="Enter text" error="This field is required" />);
    const errorElement = screen.getByText("* This field is required *");
    expect(errorElement).toBeInTheDocument();
  });
  it("render with icons", () => {
    const Icon = () => <span>Icon</span>;
    render(<Input placeholder="Enter text" icons={<Icon />} />);
    const iconElement = screen.getByText("Icon");
    expect(iconElement).toBeInTheDocument();
  });
  it("render with custom classes for input", () => {
    render(
      <Input
        placeholder="Enter text"
        customClassesForInput="border border-blue-500"
      />
    );
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toHaveClass("border border-blue-500");
  });
  it("render with custom classes for container", () => {
    render(
      <Input placeholder="Enter text" customClassesForContainer="bg-gray-200" />
    );
    const containerElement = screen.getByRole("inputContainer");
    expect(containerElement).toHaveClass("bg-gray-200");
  });
  it("render with custom error classes", () => {
    render(
      <Input
        placeholder="Enter text"
        error="This field is required"
        errorClasses="text-red-600"
      />
    );
    const errorElement = screen.getByText("* This field is required *");
    expect(errorElement).toHaveClass("text-red-600");
  });
});
