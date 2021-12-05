const price = 10;

const tip = price >= 50 && price <= 300 ? price * 0.15 : price * 0.2;
const total = price + tip;

console.log(
  `The bill was ${price}, the tip was ${tip}, and the total was ${total}`
);
