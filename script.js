// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. StoreMark'sandJohn'smassandheightinvariables
// 2. Calculate both their BMIs using the formula(youcanevenimplementboth
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
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

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console,saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2 Use a template literal to include the BMI values in the outputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`)
} else {
    console.log(`John's BMI is higher than Mark's!`)
}

//  Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them,create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a' calcBMI' method on each object to calculate the BMI(the same method on both objects). Store the BMI value to a property, and also return it from the method
// 3. Log to the console who has the higher BMI,together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

const markObject = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        BMI = this.mass / this.height **2
        return BMI
    }
};

const johnObject = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        BMI = this.mass / this.height **2
        return BMI
    }
};

const CalculationBMIMark = markObject.calcBMI();
const CalculationBMIJohn = johnObject.calcBMI();

console.log(CalculationBMIMark);
console.log(CalculationBMIJohn);

CalculationBMIMark > CalculationBMIJohn ? console.log(`${markObject.fullName}'s BMI (${CalculationBMIMark}) is higher than ${johnObject.fullName}'s BMI (${CalculationBMIJohn}) `) : (`${johnObject.fullName}'s BMI (${CalculationBMIJohn}) is higher than ${markObject.fullName}'s BMI (${CalculationBMIMark}) `);

// Coding Challenge #4
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team,using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus1:Include a requirement for a minimum score of 100.With this rule,a
// team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus2:Minimum score also applies to a draw!So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

const calcAverageScore = (a, b, c) => (a + b + c) / 3

let averageDolphinScore = calcAverageScore(96, 108, 89);
let averageKoalaScore = calcAverageScore(88, 91, 110);
let minimumScore = 100

if(averageDolphinScore > averageKoalaScore && averageDolphinScore >= minimumScore) {
    console.log('Dolphins Win!')
} else if (averageDolphinScore === averageKoalaScore) {
    console.log('Its a tie!')
} else if (averageKoalaScore >averageDolphinScore && averageKoalaScore>= minimumScore) 
    {console.log('Koalas Win!')} 
    else {console.log('No one wins!')}

    // Coding Challenge #5
    // Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
    // Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
    // A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
    // Your tasks:
    // 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
    // 2. Use the function to calculate the average for both teams
    // 3. Create a function 'checkWinner' that takes the average score of each team
    // as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
    // 4. Use the 'checkWinner' function to determine the winner for Data 1
    // 5. Ignore draws this time
    // Test data:
    // § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
    // Hints:
    // § To calculate average of 3 values, add them all together and divide by 3
    // § To check if number A is at least double number B, check for A >= 2 * B.
    // Apply this to the team's average scores 😉



    const calcAverage = (scoreOne,scoreTwo, scoreThree) => 
    {let calc = (scoreOne + scoreTwo + scoreThree)/3
    return calc}

    let avgDolphins = calcAverage(44,23,71);
    let avgKoalas = calcAverage(65,54,49);

    console.log(avgDolphins,avgKoalas)

    const checkWinner = function (avgDolphins, avgKoalas) {
        if (avgDolphins >= 2 * avgKoalas) {
            console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
        } else if (avgKoalas >= 2 * avgDolphins) {
            console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
        }
        else {console.log(`No winner!`)}
    }

    checkWinner(avgDolphins,avgKoalas);

        // Coding Challenge #6
    // Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
    // Your tasks:
    // 1. Calculate the tip,depending on the bill value.Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
    // 2. Print a string to the console containing the bill value,the tip,and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
    // Test data:
    // § Data 1: Test for bill values 275, 40 and 430 

    let billValue = 275;
    let tip = billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
    let finalValue = billValue + tip;

    console.log(`The bill was ${billValue}, the tip is ${tip} and the final value ${finalValue}`);

    billValue = 40;
    tip = billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
    finalValue = billValue + tip;
    console.log(`The bill was ${billValue}, the tip is ${tip} and the final value ${finalValue}`);

    billValue = 430;
    tip = billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
    finalValue = billValue + tip;
    console.log(`The bill was ${billValue}, the tip is ${tip} and the final value ${finalValue}`);
    


    // Coding Challenge #7
    // Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
    // Your tasks:
    // 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
    // 2. And now let's use arrays!So create an array 'bills' containing the test data below
    // 3.Create an array 'tips' containing the tip value for each bill,calculated from the function you created before
    // 4.Bonus:Create an array 'total' containing the total values,so the bill+tip 
    // Test data: 125, 555 and 44
    // Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

    const calcTip = function (bills) {
        return bills >= 50 && bills <= 300 ? 0.15 * bills : 0.2 * bills
    }
    const bills = [125, 555, 44];
    const tips = [calcTip(bills[0]), calcTip(bills[1]) ,calcTip(bills[2])];
    console.log(bills, tips);
    const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2] ];
    console.log(total);
    
// Coding Challenge #8
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'billz' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tipz' and 'totalz')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉 Bonus:
// 4. Bonus: Write a function 'calcAverage1' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

const billz = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipz = [];
const totalz = [];

for (let i = 0; i <= billz.length; i++ ) {
    let tipValue = calcTip(billz[i]);
    tipz.push(tipValue);
    let total = tipValue + billz[i];
    totalz.push(total);
};

console.log(tipz);
console.log(totalz);

const calcAverage2 = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; //same as sum = sum + arr[i];
    }
    // console.log(sum)
    return sum / arr.length;
};

console.log(calcAverage2([2, 3, 6]));
console.log(calcAverage2(totalz));
console.log(calcAverage2(tipz));