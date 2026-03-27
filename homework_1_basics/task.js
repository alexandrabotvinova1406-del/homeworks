"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr;
  } else if (d === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  } else {
    const sqrtD = Math.sqrt(d);
    const root1 = (-b + sqrtD) / (2 * a);
    const root2 = (-b - sqrtD) / (2 * a);
    arr.push(root1, root2);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyRate = percent / 100 / 12;
  const loanBody = amount - contribution;

  if (loanBody <= 0) {
    return 0;
  }

  let monthlyPayment;
  if (monthlyRate === 0) {
    // Если ставка 0, платёж просто делится на месяцы
    monthlyPayment = loanBody / countMonths;
  } else {
    monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
  }

  const totalPayment = monthlyPayment * countMonths;
  return Math.round(totalPayment * 100) / 100;
}
