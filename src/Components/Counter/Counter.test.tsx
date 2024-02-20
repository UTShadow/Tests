import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";
import '@testing-library/jest-dom';

test("handles onClick", () => {
  render(<Counter />);

  const divElement = screen.getByRole("contentinfo");
  const buttonElement = screen.getByText("Add One");
  fireEvent.click(buttonElement);
  expect(divElement).toHaveTextContent("Count is 1");
});