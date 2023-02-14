//Function

//#1
// function sayHelloWorld() {
//   alert("Hello World");
// }

//#2

// let name = prompt("Enter your name");
// function sayHelloWorld(name) {
//   alert(`Hello, ${name}`);
// }

//#3
/*

* = 'Hello everybody"
** = "Hello everybody"
*** = "John"
**** = "undefined"

*/

//#4
/* Guest  */

//#5

//#6
// function powNum(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

// console.log(powNum(5, 4));

//#7
// function min(num1, num2) {
//   let result = num1 > num2 ? num2 : num1;
//   return result;
// }

// console.log(min(213233, 832));

//#8

// function login(uname, pass) {
//   if (uname.trim() == "admin" && pass.trim() == "P@ssw0rd") {
//     console.log("Login Success!");
//   } else {
//     console.log("Login Failed");
//   }
// }

// login("admin", "P@ssw0rd");

//#9

// function checkPrimeNumber(num) {
//   if (num == 1) {
//     console.log(" 1 is not prime number");
//   } else if (num > 1) {
//     for (let i = 2; i <= num; i++) {
//       let primeNum = true;

//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//           primeNum = false;
//           break;
//         }
//       }
//       if (primeNum) console.log(i);
//     }
//   } else {
//     console.log("Negative Number!");
//   }
// }

// checkPrimeNumber(100);

// Arrow Function

//#1
// const multiNum = (num1, num2) => console.log(num1 * num2);
// multiNum(23, 9);

//#2
// const checkPrimeNum = (num) => {
//   let isPrime = true;
//   for (let i = 2; i <= num; i++) {
//     if (num % i == 0) isPrime = false;
//     break;
//   }

//   if (isPrime) {
//     console.log("Prime Number");
//   } else {
//     console.log("Not Prime Number");
//   }
// };

//#3
//49

//#4 -- เหมือน

//#5

//#9
// leap year หาร 4 ลงตัว
// leap year ผลคูณ 100 && หาร 400 ลงตัว
// const isLeapYear = (year) => {
//   if (year % 100 == 0) {
//     return year % 400 == 0;
//   }
//   return year % 4 == 0;
// };

// console.log(isLeapYear(2000));

// ----------- Call Back ------------
//#1

// const rigthAdmin = () => {
//   console.log("ACCESS GRANTED");
// };
// const wrongAdmin = () => {
//   console.log("ACCESS DENIED");
// };

// const checkPermission = (role, func1, func2) => {
//   role == "ADMIN" ? func1() : func2();
// };

// checkPermission("ADMIN", rigthAdmin, wrongAdmin);
