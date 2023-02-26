import React, { useState, useEffect } from "react";
import calculateLoanMonthlyPayment from "./utilities/calculateLoanMonthlyPayment";




export default function LoanCalculator() {
  // inputs
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [loanInterestRate, setLoanInterestRate] = useState(0);

  // outputs
  const [loanMonthlyPayment, setLoanMonthlyPayment] = useState(0);

  useEffect(() => {
    // INPUTS
    let principal: number = loanAmount; // P = principal loan amount
    let interest: number = loanInterestRate; // i = monthly interest rate
    let numberOfPayments: number = loanTerm * 12; // n = number of months required to repay the loan

    // OUTPUTS
    // M = P[i(1+i)^n]/[(1+i)^n-1]
    // M = monthly payment
    let monthlyPayment: number =
      (principal * (interest * (1 + interest) ** numberOfPayments)) /
      ((1 + interest) ** numberOfPayments - 1);

    setLoanMonthlyPayment(monthlyPayment);
  }, [loanAmount, loanTerm, loanInterestRate]);

  return (
    <div>
      {/* title */}
      <h1>Loan Calculator</h1>

      {/* inputs */}
      <form>
        <div>
          <label>
            <div>Amount</div>
            <input onChange={(e) => setLoanAmount(e.target.valueAsNumber)} type='number' />
          </label>
        </div>

        <div>
          <label>
            <div>Term (Years)</div>
            <input onChange={(e) => setLoanTerm(e.target.valueAsNumber)} type='number' />
          </label>
        </div>

        <div>
          <label>
            <div>Interest Rate</div>
            <input onChange={(e) => setLoanInterestRate(e.target.valueAsNumber)} type='number' />
          </label>
        </div>
      </form>

      {/* outputs */}
      <h2>Monthly Payment: ${loanMonthlyPayment}</h2>
    </div>
  );
}