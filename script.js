// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

let country = "Turkey";
let continent = "Asia";
let population = 84340000;

console.log(country);
console.log(continent);
console.log(population);
console.log(typeof country);

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// versions)
// 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);
