import { render, screen } from "@testing-library/react";
import Select from "../Select";

describe("Select Component", () => {
  it("render with correct text", () => {
    render(
      <Select options={["Option 1", "Option 2", "Option 3"]} label="Select" placeholder="placeholder" />
    );
    expect(screen.getByText("Select")).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
    expect(screen.getByText("placeholder")).toBeInTheDocument();

  });
});
