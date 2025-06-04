import { Login } from "../Components/Login";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Login Component", () => {
  test("renders login form and handles username input", () => {
    const handleSwitch = jest.fn();
    const { getByLabelText, getByRole } = render(
      <Login onSwitch={handleSwitch} username="" />
    );

    // Check if username input is rendered
    const usernameInput = getByLabelText(/username/i);
    expect(usernameInput).toBeInTheDocument();

    // Simulate typing in username input
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    expect(usernameInput.value).toBe("testuser");

    // Check if submit button is rendered
    const submitButton = getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  test("calls onSwitch when 'Create an account' is clicked", () => {
    const handleSwitch = jest.fn();
    const { getByText } = render(<Login onSwitch={handleSwitch} username="" />);

    const createAccountBtn = getByText(/create an account/i);
    fireEvent.click(createAccountBtn);
    expect(handleSwitch).toHaveBeenCalled();
  });
});
