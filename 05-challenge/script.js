const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3;
  return average;
};

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No one wins (k: ${avgKoalas} vs d: ${avgDolphins})`);
  }
}

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(85, 54, 71);
checkWinner(avgDolphins, avgKoalas);
