import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import userEvent from "@testing-library/user-event";
import { cursorTo } from "readline";

describe("Footer Component", () => {
  it("render with text1 and text2", () => {
    render(<Footer text1="Footer Text 1" text2="Footer Text 2" />);
    expect(screen.getByText("Footer Text 1")).toBeInTheDocument();
    expect(screen.getByText("Footer Text 2")).toBeInTheDocument();
  });
  it("render with only text1", () => {
    render(<Footer text1="Footer Text 1" />);
    expect(screen.getByText("Footer Text 1")).toBeInTheDocument();
    expect(screen.queryByText("Footer Text 2")).not.toBeInTheDocument();
  });
  it("render with custom class names", () => {
    render(
      <Footer
        text1="Footer Text 1"
        text2="Footer Text 2"
        text1ClassName="custom-class1"
        text2ClassName="custom-class2"
        footerClassName="custom-class3"
      />
    );
    expect(screen.getByText("Footer Text 1")).toHaveClass("custom-class1");
    expect(screen.getByText("Footer Text 2")).toHaveClass("custom-class2");
    expect(screen.getByLabelText("footer")).toHaveClass("custom-class3");
  });
});
