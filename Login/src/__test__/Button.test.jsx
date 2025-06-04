import { Button } from "../Components/Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  test("renders button with correct text", () => {
    render(<Button type="submit">Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("button has correct type attribute", () => {
    render(<Button type="submit">Submit</Button>);
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
});
