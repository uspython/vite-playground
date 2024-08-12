import React from "react";
import { render, screen, fireEvent } from "./test-utils";
import Counter from "./Counter";
import "@testing-library/jest-dom";

describe("Counter", () => {
  test("renders with initial count", () => {
    render(<Counter initialCount={5} />);
    expect(screen.getByText(/Counter: 5/)).toBeInTheDocument();
  });

  test("increments count when increase button is clicked", () => {
    render(<Counter initialCount={5} />);
    fireEvent.click(screen.getByText("Increase"));
    expect(screen.getByText(/Counter: 6/)).toBeInTheDocument();
  });

  test("decrements count when decrease button is clicked", () => {
    render(<Counter initialCount={5} />);
    fireEvent.click(screen.getByText("Decrease"));
    expect(screen.getByText(/Counter: 4/)).toBeInTheDocument();
  });
});
