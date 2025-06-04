
import { Input } from "../Components/Input";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should render input with value and handle change", () => {
  const handleChange = jest.fn();
  const { getByDisplayValue } = render(
    <Input value="test value" onChange={handleChange} />
  );
  const input = getByDisplayValue("test value");
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "new value" } });
  expect(handleChange).toHaveBeenCalled();
});