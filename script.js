"use strict";

// CODING CHALLENGE 1 and 2
/*
let markMass = 95;
let markHeight = 1.88;
let markBMI = markMass / markHeight ** 2;

let johnMass = 85;
let johnHeight = 1.76;
let johBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johBMI;

markHigherBMI
  ? console.log(`Marks has a higher BMI: ${markBMI.toFixed(2)}`)
  : console.log(`John has a higher BMI: ${johBMI.toFixed(2)} `);

  */

// CODING CHALLENGE 3
/*
let dolphinsAvgScore = (97 + 112 + 101) / 3;
let koalasAvgScore = (109 + 95 + 109) / 3;
console.log(dolphinsAvgScore, koalasAvgScore);

if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= 100) {
  console.log(
    `The DOLPHINS are the champios with ${dolphinsAvgScore.toFixed(2)} points`
  );
} else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= 100) {
  console.log(
    `The KOALAS are the champios with ${koalasAvgScore.toFixed(2)} points`
  );
} else if (dolphinsAvgScore === koalasAvgScore) {
  console.log(`Both teams have score ${dolphinsAvgScore} so we have a DRAW`);
} else {
  console.log(
    `None of the teams scored at lest 100 points so there are no champion =(`
  );
}

*/

// CODING CHALLENGE 4
/*

let bill = 275;

bill > 50 && bill <= 300
  ? console.log(
      `The bill was ${bill}, the tip was ${
        bill * 0.15
      }, and the total value is ${bill + bill * 0.15}$ Dolars`
    )
  : console.log(
      `The bill was ${bill}, the tip was ${
        bill * 0.2
      }, and the total value is ${bill + bill * 0.2}$ Dolars`
    );

*/

// FUNCTIONS

/*

const calcAge = (birthYear) => 2037 - birthYear;

console.log(calcAge(1993));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1993, "Pedro"));


*/

/*

const calcAverageScore = (score1, score2, score3) =>
  (score1 + score2 + score3) / 3;

const avgDolphins = calcAverageScore(44, 23, 71);
const avgKoalas = calcAverageScore(650, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins won!!! (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas won!!! (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("DRAW - NO WINNERS");
  }
}

checkWinner(avgDolphins, avgKoalas);


*/

// CODING CHALLENGE

/*

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const calcTotal = (bill) => bill + calcTip(bill);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [calcTotal(bills[0]), calcTotal(bills[1]), calcTotal(bills[2])];

console.log(bills, tips, totals);


*/

// CODING CHALLENGE
/*

function calcBMI(mass, height) {
  return (mass / (height * height)).toFixed(2);
}

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  markBMI: function () {
    return (this.mass / (this.height * this.height)).toFixed(2);
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  johnBMI: function () {
    return (this.mass / (this.height * this.height)).toFixed(2);
  },
};

console.log(mark.markBMI());


*/
/*

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + calcTip([i]));
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals).toFixed(2));

*/

// function soma() {
//   var a = 2;
//   return a;
// }

// console.log(a);

// const restaurant = {
//   name: "Classic Italian",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

// order: function (starterIndex, mainIndex) {
//   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z, w, f, g] = arr;

// console.log(x, y, z, w, f, g);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive to return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// DESTRUCTURING OBJECTS

const restaurant = {
  name: "Classic Italian",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //  Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    addres,
  }) {
    console.log(
      `Order received!
       ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
       will be delivered to ${addres} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// restaurant.orderDelivery({
//   time: "22:30",
//   addres: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   addres: "Via del Sole, 21",
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

// console.log(a, b);

// // Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// SPRED OPERATOR
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

console.log(badNewArr);

const newGoodArray = [1, 2, ...arr];
console.log(newGoodArray);

console.log(...newGoodArray);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy arrays
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 or more arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects

const str = "jonas";
const letters = [...str, "", "S."];

console.log(letters);
console.log(...str);

// Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients);

const newRestaurant = {
  ...restaurant,
  founder: "Guiseppe Romanazzio",
  foundedIn: 1998,
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
