import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  it("render with correct text", () => {
    render(<Header title="Login" subtitle="Login to your Account" />);
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Login to your Account")).toBeInTheDocument();
  });
});
