import { Label } from "../Components/Label";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Label Component", () => {
  test("should render label with text", () => {
    const { getByText } = render(<Label>Test Label</Label>);
    expect(getByText("Test Label")).toBeInTheDocument();
  });

  test("should render label with htmlFor prop", () => {
    const { getByLabelText } = render(
      <>
        <Label htmlFor="username">Username</Label>
        <input id="username" />
      </>
    );
    expect(getByLabelText("Username")).toBeInTheDocument();
  });
});
