import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../App";

test("addition works correcty", () => {
  render(<App />);
  expect(screen.getByText(/Count :0/i)).toBeInTheDocument();
});

test("increment works correctly", () => {
  render(<App />);
  const incrementButton = screen.getByRole("button", { name: "+" });
  fireEvent.click(incrementButton);
  expect(screen.getByText(/Count :1/i)).toBeInTheDocument();
});
