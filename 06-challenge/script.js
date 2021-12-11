function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  }
  return bill * 0.2;
}
const prices = [125, 555, 44];
const tips = [calcTip(prices[0]), calcTip(prices[1]), calcTip(prices[2])];

const total = [prices[0] + tips[0], prices[1] + tips[1], prices[2] + tips[2]];
console.log({
  prices,
  tips,
  total,
});
