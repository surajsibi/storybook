import { screen, render } from "@testing-library/react";
import Actions from "../Actions";

describe("Actions Component", () => {
  it("renders the actions component", () => {
    render(<Actions text1="Need help logging in?" text2="Forgot Password" />);
    expect(screen.getByText(/Need help logging in\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Forgot Password/i)).toBeInTheDocument();
  });
  it("renders the actions component with custom class names", () => {
    render(
      <Actions
        text1="Need help logging in?"
        text2="Forgot Password"
        text1ClassName="custom-class1"
        text2ClassName="custom-class2"
        actionsClassName="custom-class3"
      />
    );
    const actionsElement = screen.getByText(
      /Need help logging in\?/i
    ).parentElement;
    expect(actionsElement).toBeInTheDocument();
    expect(actionsElement).toHaveClass("custom-class3");
    const text2Element = screen.getByText(/Forgot Password/i);
    const text1Element = screen.getByText(/Need help logging in\?/i);
    expect(text1Element).toBeInTheDocument();
    expect(text2Element).toBeInTheDocument();
    expect(text2Element).toHaveClass("custom-class2");
    expect(text1Element).toHaveClass("custom-class1");
  });
});
