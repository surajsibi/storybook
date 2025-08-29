import { render, screen } from "@testing-library/react";
import Dialog from "../Dialog";

describe("Dialog Component", () => {
  it("render dialog", () => {
    render(
      <Dialog
        buttonLabel="Share"
        headerTitle="Share"
        headerSubTitle="Share with your friends"
      />
    );
    expect(screen.getByText("Share")).toBeInTheDocument();
    expect(screen.getByText("Share with your friends")).toBeInTheDocument();
  });
});
