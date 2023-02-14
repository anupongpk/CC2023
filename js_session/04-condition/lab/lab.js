// -------- Logical Operators
// #1
// alert(null || 2 || undefined); //2
// alert(alert(1) || 2 || alert(3)); // alert(1) และ 2 เพราะ alert(1) คืนค่าเป็น undefinded
// alert(1 && null && 2); //null
// alert(alert(1) && alert(2)); // alert(1) และ alert undefinded
// alert(null || (2 && 3) || 4); // alert (3)

// #2
// ไม่มี

// --------- if statement ---------

//#1
//alert คำว่า 'Nooo'

//#2
// let a;
// console.log((a = " " ? "Yes" : "Nooo"));
// Alert "Yes"

//#3
// let input = prompt("Guest my name");
// input == "ice" ? alert("Correct") : alert("Wrong");

//#4
//case1
// let input = Number(prompt("Enter numbers"));

// input > 0
//   ? alert("Positive number")
//   : input == 0
//   ? alert("Zero")
//   : input < 0
//   ? alert("Negative Number")
//   : alert("Invalid Number");

//case2

// let input = prompt("Enter numbers");

// if (input == null || input == "" || input.trim() == "" || isNaN(input)) {
//   alert("Invalid Number");
// } else if (input > 0) {
//   alert("positive Number");
// } else if (+input == 0) {
//   alert("Zero");
// } else {
//   alert("Negative number");
// }

//#5
// let inputNumber = Number(prompt("Enter your numbers"));
// inputNumber % 2 == 0 ? alert("Even Number") : alert("Odd Number");

//#6
// let input = Number(prompt("Enter your numbers"));
// let input2 = Number(prompt("Enter your numbers"));
// let sum = input + input2;
// alert(sum);
// sum === NaN ? alert("Invalid Number") : alert(sum);

//#7
let uname = prompt("Enter your usename");
let pass = prompt("Enter your password");

if (uname == null || uname.trim() == "") {
  alert("username is required");
  if (pass == null || pass.trim() == "") {
    alert("password is required");
  }
} else if (pass == null || pass.trim() == "") {
  alert("password is required");
} else {
  if (
    (uname == "admin" && pass == "1234") ||
    (uname == "john" && pass == "qwerty")
  ) {
    alert(`Hello ${uname}`);
  } else {
    alert("invalid username or password");
  }
}

// uname == ""
//   ? alert("username is required")
//   : pass == ""
//   ? alert("password is required")
//   : "";

// (uname == "admin" && pass == "1234") || (uname == "john" && pass == "qwerty")
//   ? alert(`Hello ${uname}`)
//   : alert("invalid username or password");

//#10

// let age = prompt("How old are you?");
// let message = age >= 18 ? "Allowed" : "Not Allowed";
