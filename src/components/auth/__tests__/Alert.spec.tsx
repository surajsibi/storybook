import { render, screen } from "@testing-library/react";
import Alert from "../Alert";

describe("Alert Component", () => {
  it("renders with correct text", () => {
    render(<Alert heading="Alert Heading" subHeading="Alert Subheading" />);
    expect(screen.getByText("Alert Heading")).toBeInTheDocument();
    expect(screen.getByText("Alert Subheading")).toBeInTheDocument();
  });
  it("render with icons", () => {
    render(
      <Alert
        heading="Alert Heading"
        subHeading="Alert Subheading"
        icons="success"
      />
    );
    expect(screen.getByText("Alert Heading")).toBeInTheDocument();
    expect(screen.getByText("Alert Subheading")).toBeInTheDocument();
    expect(screen.getByLabelText(/success/i)).toBeInTheDocument();
  });
  it("render with custom class names", () => {
      render(
        <Alert
          heading="Alert Heading"
          subHeading="Alert Subheading"
          headingClassName="custom-class3"
          subHeadingClassName="custom-class4"
        />
      );
      expect(screen.getByText("Alert Heading")).toHaveClass("custom-class3");
      expect(screen.getByText("Alert Subheading")).toHaveClass("custom-class4");
  })
});
