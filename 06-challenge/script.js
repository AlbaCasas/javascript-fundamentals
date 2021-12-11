function calcTip(bill) {
  const tips = [0.15, 0.2];
  if (bill >= 50 && bill <= 300) {
    return bill * tips[0];
  }
  return bill * tips[1];
}
const prices = [125, 555, 44];
const tips = [calcTip(prices[0]), calcTip(prices[1]), calcTip(prices[2])];

const total = [prices[0] + tips[0], prices[1] + tips[1], prices[2] + tips[2]];
