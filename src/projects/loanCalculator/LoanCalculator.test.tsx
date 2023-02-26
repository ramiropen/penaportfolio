import { render, screen, fireEvent } from "@testing-library/react";
import LoanCalculator from "./LoanCalculator";

describe("Render text", () => {
  test("Loan Calculator", () => {
    render(<LoanCalculator />);
    const divElement = screen.getByText(/Loan Calculator/i);
    expect(divElement).toBeInTheDocument();
  });
});