/* 
Input:
    Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Output (Print messages): 
    Dolphin average: Number
    Koalas average: Number
    Dolphin or koala has won!
*/

const mediaDolphins = (121 + 120 + 89) / 3;
console.log(`Dolphins average: ${mediaDolphins}`);
const mediaKoalas = (120 + 120 + 89) / 3;
console.log(`Koalas average: ${mediaKoalas}`);

if (mediaDolphins > mediaKoalas && mediaDolphins >= 100) {
  console.log("Dolphins has won");
} else if (mediaKoalas > mediaDolphins && mediaKoalas >= 100) {
  console.log("Koalas has won");
} else if (
  mediaKoalas === mediaDolphins &&
  mediaDolphins >= 100 &&
  mediaKoalas >= 100
) {
  console.log("Draw!");
} else {
  console.log("Both disqualified");
}
