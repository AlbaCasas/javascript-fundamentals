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
const mediaKoalas = (88 + 91 + 110) / 3;
console.log(`Koalas average: ${mediaKoalas}`);

if (mediaDolphins > mediaKoalas) {
  console.log("Dolphins has won");
} else {
  console.log("Koalas has won");
}
