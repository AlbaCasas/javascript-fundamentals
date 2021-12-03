/* 
Input:
    Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Output (Print messages): 
    Dolphin average: Number
    Koalas average: Number
    Dolphin or koala has won!
*/

const mediaDolphins = (96 + 108 + 89) / 3;
console.log(`Dolphins average: ${mediaDolphins}`);
const mediaKoalas = (110 + 108 + 89) / 3;
console.log(`Koalas average: ${mediaKoalas}`);

if (mediaDolphins > mediaKoalas) {
  console.log("Dolphins has won!");
} else if (mediaDolphins < 100 && mediaKoalas < 100) {
  console.log("Both disqualified");
} else if (mediaKoalas > mediaDolphins) {
  console.log("Koalas has won!");
} else {
  if (
    mediaDolphins === mediaKoalas &&
    mediaKoalas >= 100 &&
    mediaDolphins >= 100
  ) {
    console.log("Draw!");
  }
}
