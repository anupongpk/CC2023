// Rest and Spread operator

//ex1

// const calMultipleNums = (...numbers) => {
//   let total;
//   total = numbers.reduce((acc, item) => item * acc, 1);
//   return total;
// };

// const test = calMultipleNums(1, 2, 3, 4);
// console.log(test);

//ex2
// const filterOutOdds = (...numbers) => {
//   let even = numbers.filter((item) => item % 2 == 0);
//   return even;
// };

// const test = filterOutOdds(2, 3, 4, 5, 6, 7, 8, 9, 10);

// console.log(test);

//ex3

// const mergeObjects = (...objects) => {
//   const mergeObj = objects.reduce((acc, item) => {
//     Object.assign(acc, item);
//     return acc;
//   }, {});

//   return mergeObj;
// };

// let t1 = { name: "ice" };
// let t2 = { age: 19 };
// let t3 = { address: "44/2" };

// let result = mergeObjects(t1, t2, t3);
// console.log(result);

//--> Spread Operator (...)

//lab4

// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];

// const allnums = [...nums1, -6, -1, ...nums2];
// console.log(allnums);

//lab5

//option1
// function powThreeIndex(array) {
//   const temp_arr = [...array];
//   let thirdIndexValue = temp_arr[3];
//   temp_arr[3] = thirdIndexValue * thirdIndexValue;
//   return temp_arr;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let test = powThreeIndex(numbers);

// console.log(test);

//option2

// function powThreeIndex(array) {
//   let cloneArr = [...array];
//   let result = cloneArr.map((item, index) => (index == 3 ? item * item : item));
//   return result;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let test = powThreeIndex(numbers);

// console.log(test);

//lab6

// function getPerson(fname, lname, ...hobbies) {
//   let obj = {
//     fname,
//     lname,
//     hobbiesnumbers: hobbies.length,
//   };
//   return obj;
// }

// const test = getPerson(
//   "ice",
//   "kub",
//   "football",
//   "basketball",
//   "ddd",
//   "aaa",
//   "dddd"
// );

// console.log(test);

//lab8
// const removeRandom = (arr) => {
//   let randomIndex = Math.floor(Math.random() * arr.length);
//   console.log(randomIndex);
//   arr.splice(randomIndex, 1);
//   return arr;
// };

// let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let resule = removeRandom(test);
// console.log(resule);

//--> Destructuring

/*
//lab 1
let [first, second, third] = ["Maya", "Marisa", "Chi"];
console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//lab 2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
];
console.log(raindrops); // Raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); // ***[ Bright copper kettles, warm woolen mittens ]



//lab3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers); // *




//lab4
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets); // * 8
console.log(yearNeptuneDiscovered); // ** 1846


//lab5
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};
let { numPlanets, ...discoveryYears } = planetFacts;
console.log(discoveryYears); // *  { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659, }



//labd9
const checkAge = ({ firstname, lastname, age }) =>
  age > 18 ? `Hello ${firstname} ${lastname}` : `No Enter`;

let obj = {
  firstname: "ice",
  lastname: "kub",
  age: 20,
};

let result = checkAge(obj);
console.log(result);

//lab9
let user = {
  name: "ice",
  years: 22,
  isAdmin: false,
};

let { name, years: age, isAdmin = true } = user;

console.log(name, age, isAdmin);

//10

// function topSalaries(salaries) {}

//11

let arr = [1, [2, [[[3, 4], 5], 6]]];

let [a, b, [[[c]]], [[[d]]], [e], [f]] = arr;

console.log(a, b, c, d, e, f);


//12
const obj = { prop: 5, prop2: 10 };

let { prop: a, prop2: b } = obj;

console.log(a, b);


//13

let a, b;
{a,b} == {a:1, b:2};

console.log(a,b)



//16

const q = {
  prop: "Hello",
  prop2: {
    prop2: {
      nested: ["a", "b", "c"],
    },
  },
};

let { prop: x, prop2: prop2 } = q;
*/

//17

// const names = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jack", lastName: "Dann" },
//   { firstName: "Joe", lastName: "Dunne" },
// ];

// for (let value of names) {
//   let { firstName, lastName } = value;
//   console.log(firstName + " " + lastName);
// }

//18

//
