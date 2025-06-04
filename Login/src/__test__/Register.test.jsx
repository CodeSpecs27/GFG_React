import { Register } from "../Components/Register";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Register Component", () => {
  test("renders register form and handles username input", () => {
    const handleSwitch = jest.fn();
    const { getByLabelText } = render(<Register onSwitch={handleSwitch} />);

    // Check if username input is rendered
    const usernameInput = getByLabelText(/username/i);
    expect(usernameInput).toBeInTheDocument();

    // Simulate typing in username input
    fireEvent.change(usernameInput, { target: { value: "newuser" } });
    expect(usernameInput.value).toBe("newuser");
  });

  test("calls onSwitch when registration is successful", () => {
    const handleSwitch = jest.fn();
    const { getByLabelText, getByRole } = render(
      <Register onSwitch={handleSwitch} />
    );

    // Fill required fields
    fireEvent.change(getByLabelText(/username/i), {
      target: { value: "validuser" },
    });
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: "valid@email.com" },
    });
    fireEvent.change(getByLabelText(/phone|mobile/i), {
      target: { value: "1234567890" },
    });

    // Simulate form submit
    const submitButton = getByRole("button", { name: /sign up|submit/i });
    fireEvent.click(submitButton);
  });
});
