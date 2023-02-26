import calculateLoanMonthlyPayment from "./calculateLoanMonthlyPayment";

test("amount: 100, monthlyTerm:100, interestRate: 10", () => {
    const result = calculateLoanMonthlyPayment(1000,120,10);
    expect(result).toBe(44);
});

// test("amount: 100, monthlyTerm:100, interestRate: 10", () => {
//     const result = calculateLoanMonthlyPayment(100,100,10);
//     expect(result).toBe(44);
// });

// test("amount: 100, monthlyTerm:100, interestRate: 10", () => {
//     const result = calculateLoanMonthlyPayment(100,100,10);
//     expect(result).toBe(44);
// });

// test("amount: 100, monthlyTerm:100, interestRate: 10", () => {
//     const result = calculateLoanMonthlyPayment(100,100,10);
//     expect(result).toBe(44);
// });

// test("amount: 100, monthlyTerm:100, interestRate: 10", () => {
//     const result = calculateLoanMonthlyPayment(100,100,10);
//     expect(result).toBe(44);
// });

// test("amount: 100, monthlyTerm:100, interestRate: 10", () => {
//     const result = calculateLoanMonthlyPayment(100,100,10);
//     expect(result).toBe(44);
// });
