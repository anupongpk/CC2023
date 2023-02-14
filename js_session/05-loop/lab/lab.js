// -------- While loop
//#1
//-3

//#2
//ไม่เหมือน

//#3
// let i = 1;
// while (i <= 100) {
//   if (i % 2 == 0) console.log(i);
//   i++;
// }

//#4

// let input = 5555;
// let number = input.toString();
// let len = number.length;
// let sum = 0;
// let i = 0;

// while (i < len) {
//   sum += Number(number[i]);
//   i++;
// }
// console.log(sum);

// -------- Do while

//#1
// function checkNum(num) {
//   return num == null || num.trim() == "" || num == 0 || isNaN(num);
// }

// let sum = 0;
// let avg;
// let input;
// let count = 0;

// do {
//   input = prompt("Enter you number");
//   if (!checkNum(input)) {
//     sum += Number(input);
//     count++;
//   }
// } while (!checkNum(input));

// avg = sum / count;

// console.log(sum);
// console.log(count);
// console.log(avg);

//#2

let ans1 = Number(prompt("Player1 :Enter number 1 - 99"));
let ans2;
if (ans1 < 1 || ans1 > 99) {
  alert("Invalid Number!");
} else {
  do {
    ans2 = Number(prompt("Player2 :Enter number 1 - 99"));
    if (ans2 < 1 || ans2 > 99) {
      alert("Invalid number");
    } else if (ans2 == ans1) {
      alert(`Correct!!, Answers is ${ans1}`);
    } else if (ans2 > ans1) {
      alert("ตัวเลขที่พิมพ์มา มากกว่า คำตอบ");
    } else {
      alert("ตัวเลขที่พิมพ์มา น้อยกว่า คำตอบ");
    }
  } while (ans2 != ans1);
}

// -------- For Loop

//#1
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) console.log(i);
// }

//#2
// let sum = 0;
// let sumEvenNum = 0;
// let sumOddNum = 0;
// let sumPowEven = 0;
// let sumPowOdd = 0;
// let total;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
//   if (i % 2 == 0) {
//     sumEvenNum += i;
//     sumPowEven += i * i;
//   } else {
//     sumOddNum += i;
//     sumPowEven += i * i;
//   }
// }

// total = sumEvenNum - sumOddNum;

// console.log(
//   sum +
//     ", " +
//     sumEvenNum +
//     ", " +
//     sumOddNum +
//     ", " +
//     sumPowEven +
//     ", " +
//     sumPowOdd +
//     ", " +
//     total
// );
