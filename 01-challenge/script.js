/* Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) 
(mass in kg and height in meter).
Your tasks:

1. Store Mark'sand John'smass and height invariables
2. Calculate both their BMI susing the formula
(you can even implement both versions)
3. Createa Boolean variable' markHigherBMI' 
containing information about whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. 
John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. 
John weights 85 kg and is 1.76 m tall. */ 

let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;

let markHigherBMI = BMIMark > BMIJohn;

console.log(`Mark: weight: ${massMark} height: ${heightMark} BMI: ${BMIMark}`);
console.log(`John: weight: ${massJohn} height: ${heightJohn} BMI: ${BMIJohn}`);
console.log(`Is Marks's BMI greater than John's BMI? ${markHigherBMI}`)

