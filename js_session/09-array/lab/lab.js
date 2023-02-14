//Array

//--> Loop through Array

//## For each

//1
// const array = [29, 17, 13, 47, 23, 31];

// let sum = 0;

// array.forEach((number) => {
//   sum += number;
// });

// console.log(sum);

//2
// const names = ["Mike", "Sid", "Jack", "Bill"];

// names.forEach((name, index) => {
//   let sentense = `${index + 1}. ${name}`;
//   console.log(sentense);
// });

//3

// const squareArr = (arr) => {
//   let Temp_arr = [];
//   arr.forEach((item, index) => {
//     Temp_arr[index] = item * item;
//   });
//   return Temp_arr;
// };

// const arr = [2, 3, 5, 7, 11];

// const result = squareArr(arr);
// console.log(result);

//4
//option 1

// const sales = [
//   { price: 1000, discount: 0.1 },
//   { price: 500, discount: 0.05 },
//   { price: 100 },
// ];

// const summary = [];

// sales.forEach((item, index) => {
//   let netPrice;
//   if (item?.discount != undefined) {
//     netPrice = item["price"] * (1 - item["discount"]);
//     netPrice = { netPrice };
//   } else {
//     netPrice = item["price"];
//     netPrice = { netPrice };
//   }
//   summary[index] = netPrice;
// });

// console.log(summary);

//option 2

// const sales = [
//   { price: 1000, discount: 0.1 },
//   { price: 500, discount: 0.05 },
//   { price: 100 },
// ];

// function calSummary(arr) {
//   let summary = [];

//   arr.forEach((element) => {
//     let currentValue = {};
//     let netPrice = element.price * (1 - (element.discount ?? 0));
//     currentValue.netPrice = netPrice;
//     summary.push(currentValue);
//   });

//   return summary;
// }

// let result = calSummary(sales);
// console.log(result);
//5

// let input;
// let sum;
// const arrNumber = [];

// do {
//   input = +prompt("enter your numbers");
//   console.log(input);
//   if (input != null && input != "" && input != 0 && input != NaN) {
//     arrNumber.push(input);
//   }
// } while (input != null && input != "" && input != 0 && input != NaN);

// if (arrNumber.length > 0) {
//   sum = 0;
//   arrNumber.forEach((item) => {
//     sum += item;
//   });
// } else {
//   alert("No Numbers in Array");
// }

// console.log(sum);

// --> Array method (part3 : searching)

//2

//4

// const nums = [7, 9, -5, -1, 0, 3];

// function findNum(arr) {
//   return arr.find((element) => element < 0);
// }

// console.log(findNum(nums));

//5
// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// function findCherries(arr) {
//   return arr.find((element) => element.name == "cherries");
// }

// console.log(findCherries(inventory));

//6

// const tasks = [
//   { id: 1, name: "Fishing" },
//   { id: 2, name: "Shopping" },
//   { id: 3, name: "Swimming" },
// ];

// const result = tasks.findIndex((element) => element.id == 2);
// console.log(result);

//7

// const tasks = [
//   { id: 1, name: "Fishing" },
//   { id: 2, name: "Shopping" },
//   { id: 3, name: "Swimming" },
// ];

// function updateTask(id, newName) {
//   //clone array
//   const newTask = [...tasks];

//   newTask.find((element) => {
//     if (element.id == id) {
//       element.name = newName;
//     }
//   });

//   return newTask;
// }

// console.log(updateTask(1, "shopping"));

//8

// const tasks = [
//   { id: 1, name: "Fishing" },
//   { id: 2, name: "Shopping" },
//   { id: 3, name: "Swimming" },
// ];

// console.log(tasks);

// function deleteTask(id) {
//   let foundIndex = tasks.findIndex((item) => item.id == id);

//   console.log("foundIndex", foundIndex);

//   if (foundIndex != -1) {
//     tasks.splice(foundIndex, 1);
//   }
// }
// console.log(tasks);

//10

// let arr_number = [
//   3, 11, 2, 4, 66, 4, 7, 99, 32, 1, 2, 3, 4, 77, 4, 8, 9, 10, 12, 12, 13, 14,
//   15,
// ];

// function filterRange(arr, a, b) {
//   let result = arr.filter((element) => element >= a && element <= b);
//   return result;
// }

// const test = filterRange(arr_number, 7, 77);

// --> Array method (part4 : transform)

//# array.map
//จะต้องมี return ค่าใหม่ออกมา โดยมันจะ modified ค่าใหม่ออกมา

// let arr = [
//   "active",
//   "actice",
//   "inactice",
//   "actice",
//   "inactice",
//   "inactice",
//   "inactice",
// ];

// let result = arr.filter(function (item, index, array) {
//   if (item == "inactice") {
//     return index;
//   }
// });

// let result = arr.forEach(function (item, index, array) {
//   if (item == "inactice") {
//     return index;
//   }
// });

// console.log(result);

//#1

// let blue_folder_arr = [
//   {
//     x: 31,
//     y: 519,
//     width: 24,
//     height: 21,
//   },
//   {
//     x: 31,
//     y: 621,
//     width: 24,
//     height: 21,
//   },
//   {
//     x: 31,
//     y: 730,
//     width: 24,
//     height: 21,
//   },
//   {
//     x: 31,
//     y: 839,
//     width: 24,
//     height: 21,
//   },
//   {
//     x: 31,
//     y: 417,
//     width: 24,
//     height: 21,
//   },
//   {
//     x: 31,
//     y: 468,
//     width: 24,
//     height: 21,
//   },
//   {
//     x: 31,
//     y: 788,
//     width: 24,
//     height: 21,
//   },
//   {
//     x: 31,
//     y: 890,
//     width: 24,
//     height: 21,
//   },
//   {
//     x: 31,
//     y: 570,
//     width: 24,
//     height: 21,
//   },
//   {
//     x: 31,
//     y: 672,
//     width: 24,
//     height: 21,
//   },
// ];

// blue_folder_arr.sort((a, b) => {
//   return a.y - b.y;
// });

// console.log(blue_folder_arr);
