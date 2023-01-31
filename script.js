"use strict";
// // Coding Challenge #1
// // Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// // BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// // Your tasks:
// // 1. StoreMark'sandJohn'smassandheightinvariables
// // 2. Calculate both their BMIs using the formula(youcanevenimplementboth
// // versions)
// // 3. Create a Boolean variable 'markHigherBMI' containing information about
// // whether Mark has a higher BMI than John.
// // Test data:
// // § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;

// console.log(markBMI, johnBMI);

// let markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

// // Coding Challenge #2
// // Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// // Your tasks:
// // 1. Print a nice output to the console,saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// // 2 Use a template literal to include the BMI values in the outputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// // Hint: Use an if/else statement 😉

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
// } else {
//   console.log(`John's BMI is higher than Mark's!`);
// }

// //  Coding Challenge #3
// // Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// // Your tasks:
// // 1. For each of them,create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// // 2. Create a' calcBMI' method on each object to calculate the BMI(the same method on both objects). Store the BMI value to a property, and also return it from the method
// // 3. Log to the console who has the higher BMI,together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// // Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// const markObject = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     BMI = this.mass / this.height ** 2;
//     return BMI;
//   },
// };

// const johnObject = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     BMI = this.mass / this.height ** 2;
//     return BMI;
//   },
// };

// const CalculationBMIMark = markObject.calcBMI();
// const CalculationBMIJohn = johnObject.calcBMI();

// console.log(CalculationBMIMark);
// console.log(CalculationBMIJohn);

// CalculationBMIMark > CalculationBMIJohn
//   ? console.log(
//       `${markObject.fullName}'s BMI (${CalculationBMIMark}) is higher than ${johnObject.fullName}'s BMI (${CalculationBMIJohn}) `
//     )
//   : `${johnObject.fullName}'s BMI (${CalculationBMIJohn}) is higher than ${markObject.fullName}'s BMI (${CalculationBMIMark}) `;

// // Coding Challenge #4
// // There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// // Your tasks:
// // 1. Calculate the average score for each team,using the test data below
// // 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that
// // as well (draw means they have the same average score)
// // 3. Bonus1:Include a requirement for a minimum score of 100.With this rule,a
// // team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// // 4. Bonus2:Minimum score also applies to a draw!So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// // Test data:
// // § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// const calcAverageScore = (a, b, c) => (a + b + c) / 3;

// let averageDolphinScore = calcAverageScore(96, 108, 89);
// let averageKoalaScore = calcAverageScore(88, 91, 110);
// let minimumScore = 100;

// if (
//   averageDolphinScore > averageKoalaScore &&
//   averageDolphinScore >= minimumScore
// ) {
//   console.log('Dolphins Win!');
// } else if (averageDolphinScore === averageKoalaScore) {
//   console.log('Its a tie!');
// } else if (
//   averageKoalaScore > averageDolphinScore &&
//   averageKoalaScore >= minimumScore
// ) {
//   console.log('Koalas Win!');
// } else {
//   console.log('No one wins!');
// }

// // Coding Challenge #5
// // Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// // Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// // A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// // Your tasks:
// // 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// // 2. Use the function to calculate the average for both teams
// // 3. Create a function 'checkWinner' that takes the average score of each team
// // as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// // 4. Use the 'checkWinner' function to determine the winner for Data 1
// // 5. Ignore draws this time
// // Test data:
// // § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// // Hints:
// // § To calculate average of 3 values, add them all together and divide by 3
// // § To check if number A is at least double number B, check for A >= 2 * B.
// // Apply this to the team's average scores 😉

// const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
//   let calc = (scoreOne + scoreTwo + scoreThree) / 3;
//   return calc;
// };

// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// console.log(avgDolphins, avgKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log(`No winner!`);
//   }
// };

// checkWinner(avgDolphins, avgKoalas);

// // Coding Challenge #6
// // Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// // Your tasks:
// // 1. Calculate the tip,depending on the bill value.Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// // 2. Print a string to the console containing the bill value,the tip,and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// // Test data:
// // § Data 1: Test for bill values 275, 40 and 430

// let billValue = 275;
// let tip =
//   billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
// let finalValue = billValue + tip;

// console.log(
//   `The bill was ${billValue}, the tip is ${tip} and the final value ${finalValue}`
// );

// billValue = 40;
// tip = billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
// finalValue = billValue + tip;
// console.log(
//   `The bill was ${billValue}, the tip is ${tip} and the final value ${finalValue}`
// );

// billValue = 430;
// tip = billValue >= 50 && billValue <= 300 ? 0.15 * billValue : 0.2 * billValue;
// finalValue = billValue + tip;
// console.log(
//   `The bill was ${billValue}, the tip is ${tip} and the final value ${finalValue}`
// );

// // Coding Challenge #7
// // Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// // Your tasks:
// // 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// // 2. And now let's use arrays!So create an array 'bills' containing the test data below
// // 3.Create an array 'tips' containing the tip value for each bill,calculated from the function you created before
// // 4.Bonus:Create an array 'total' containing the total values,so the bill+tip
// // Test data: 125, 555 and 44
// // Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

// const calcTip = function (bills) {
//   return bills >= 50 && bills <= 300 ? 0.15 * bills : 0.2 * bills;
// };
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);
// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(total);

// // Coding Challenge #8
// // Let's improve Steven's tip calculator even more, this time using loops!
// // Your tasks:
// // 1. Create an array 'billz' containing all 10 test bill values
// // 2. Create empty arrays for the tips and the totals ('tipz' and 'totalz')
// // 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// // Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// // Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// // tips and totals arrays 😉 Bonus:
// // 4. Bonus: Write a function 'calcAverage1' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// // 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// // 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// // 4.3. Call the function with the 'totals' array

// const billz = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tipz = [];
// const totalz = [];

// for (let i = 0; i <= billz.length; i++) {
//   let tipValue = calcTip(billz[i]);
//   tipz.push(tipValue);
//   let total = tipValue + billz[i];
//   totalz.push(total);
// }

// console.log(tipz);
// console.log(totalz);

// const calcAverage2 = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (!isNaN(arr[i])) {
//       sum += arr[i]; //same as sum = sum + arr[i];
//     } else {
//       continue;
//     }
//   }
//   // console.log(sum)
//   return sum / arr.length;
// };

// console.log(calcAverage2([2, 3, 6]));
// console.log(calcAverage2(totalz));
// console.log(calcAverage2(tipz));
// console.log(calcAverage2([6, 2]));

// // Coding Challenge #9
// // Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
// // Your tasks:
// // 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
// // 2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
// // Test data:
// // § Data 1: [17, 21, 23]

// //1) Understanding the problem: Array transofrmed into string, seperated by ...
// //What is the X days? Answer: index + 1

// //2) Breaking up into sub-problems:
// //Transform array into string
// //Transform each element to string with degrees cel
// //Strings needs to contain day (index + 1)
// //Add ...between elements and start and end of string
// //Log string to console

// const data1 = [17, 21, 23];

// console.log(`...${data1[0]}oC...${data1[1]}oC...${data1[2]}oC`); //If it was a one-time array

// const printForecast = function (arr) {
//   let str = ''; //Accumulator variable

//   for (let i = 0; i < arr.length; i++) {
//     // str = str + `${arr[i]}oC in ${i + 1} days ...`;
//     str += `${arr[i]}oC in ${i + 1} days ...`;
//   }
//   console.log('...' + str);
// };
// printForecast(data1)

//Coding Challange #10

//We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers'containing all players of both teams(22 players)
// 4. During the game,Bayern Munich (team1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.oddsobject,create one variable for each odd(called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win.Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//#1
//Before destructuring
// const players1 = game.players[0];
// const players2 = game.players[1];

//Destructuring
const [players1, players2] = game.players;

//#2
//Before REST
// const gk = players1[0];

// const fieldPlayers = [
//   players1[1],
//   players1[2],
//   players1[3],
//   players1[4],
//   players1[5],
//   players1[6],
//   players1[7],
//   players1[8],
//   players1[9],
//   players1[10],
// ];

//#After REST
const [gk, ...fieldPlayers] = players1; //Creates 2 different arrays
console.log(gk, fieldPlayers);

//#3 Using spread operator
const allPlayers = [...players1, ...players2]


console.log(players1);
console.log(players2);
console.log(fieldPlayers);
console.log(allPlayers);

//#4 combine an array with additional values
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final);

//#5 Before destructuring
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

//After destructuring
const {odds: {team1, x: draw, team2}} = game;

//#6 Creating the function
const printGoals = function (...playersScored) { //using REST parameters. playersScored is now an array.
  console.log(`${playersScored.length} goals were scored`);
};

//To test the function
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich') //4 goals were scored
printGoals('Davies', 'Muller'); //2 goals were scored
printGoals(game.scored); //This returns the array that contains the names of the scorers which is why it is 1 goals were scored
printGoals(...game.scored); //4 goals were scored (using the spread operator)

//#7
team1 < team2 && console.log('Team 1 is more likely to win'); //The && operator takes the first truthy value. Therefore, since it is true that team 2 (6.5) is greater than team 1 (1.33). Otherwise nothing would happen.
team1 > team2 && console.log('Team 2 is more likely to win'); //Nothing happens because there is no truthy value using the && operator.


//Coding Challange #11

//Let's continue with our football betting app! Keep using the 'game' variable from before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console,but in a nice formatted way,exactly like this:
// Odd of victory Bayern Munich: 1.33 
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names 😉

//#1
for (let i = 0; i < game.scored.length; i++ ){
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
};

//Alternative way
for(const [i, player] of game.scored.entries()) //i is the key number whereas player is the value. We use entries method because it is an array. 
console.log(`Goal ${i + 1}: ${player}`); //Produces same result as above

//2. 
let average = 0;
for (const odd of Object.values(game.odds))
average += odd; //Average = Average + odd
average /= Object.values(game.odds).length // Average = Average divided by Object
console.log(average);

// const valuesOdds = Object.values(game.odds)

// console.log(valuesOdds); //1.33m 3.25, 6.5

// let sum = 0;

// const sumArray = function(valuesOdds) {
// for (let i = 0; i <= valuesOdds.length; i++ ){
//   sum += valuesOdds[i]
// };
// console.log(sum);
// return sum / 3
// };

// sumArray(valuesOdds);

//3.

for (const [team, odd] of Object.entries(game.odds)) { //The difference between this and line 422 is that this is an object versus the other is an array so the first property is a key number for an array whereas it is the property name for the object. We use Object.entries and pass the object into the function.
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
  console.log(`Odd of ${teamStr} : ${odd}`);
  // console.log(team, odd);
};

