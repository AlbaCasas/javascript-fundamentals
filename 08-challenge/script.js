function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  }
  return bill * 0.2;
}

const prices = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < prices.length; i++) {
  const price = prices[i];
  const tip = calcTip(price);
  tips.push(tip);
  total = price + tip;
  totals.push(total);
}

console.log({ prices, tips, totals });
