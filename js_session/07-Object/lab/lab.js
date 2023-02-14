//### OBJECT

//------> Object and  Optional Chaining

//#1
//{ email : 'cc@gmail.com',   isActive: true }
//{}

//#2
// let user = new Object();
// user.name = "John";
// user.surname = "Doe";
// console.log(user.name);
//update name

// user.name = "Matt";
// console.log(user.name);

//#3

// let uname = "Ice";
// let pass = "1234";
// let email = "ice@test.com";

// let user = {
//   uname,
//   pass,
//   email,
// };

//#4
// const product1 = {
//   name: "Water",
//   distributor: {
//     name: "Giraffe Water Company",
//     address: {
//       street: "Phetchaburi",
//       subdistrict: "Thanonphetchaburi",
//       district: "Ratchathewi",
//       province: "Bangkok",
//     },
//   },
// };

// const product2 = {};

// console.log(product1.distributor.address.province);

// //Solve
// console.log(product2.distributor?.address?.province);

// for..in loop

//#1
// let isEmptyObject = (obj) => {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// };

//#2

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let calCalaries = (obj) => {
//   let sum = 0;
//   for (let key in obj) {
//     let currentSalary = obj[key];
//     sum += currentSalary;
//   }
//   return sum;
// };

// console.log(calCalaries(salaries));

//#3
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// const multiplyNum = (obj, num) => {
//   let result = new Object();
//   for (key in obj) {
//     let currentValue = obj[key];

//     if (typeof currentValue == "number") {
//       result[key] = currentValue * num;
//     } else {
//       result[key] = currentValue;
//     }
//   }
//   return result;
// };

// console.log(multiplyNum(menu, 3));

// let key;
// let value;
// let objTest = new Object();

// const createObj = (obj, key, value) => {
//   obj[key] = value;
// };

// do {
//   key = prompt("Enter KEY name");
//   value = prompt("Enter Value of KEY");
//   createObj(objTest, key, value);
// } while (key == "stop" || value == "stop");

// console.log(objTest);

//#4
// function createObj() {
//   const result = new Object();

//   let key;
//   let value;

//   do {
//     key = prompt("Enter KEY name");
//     value = prompt("Enter Value of this name");

//     if (key != null && key.trim() != "" && key != "stop" && value != "stop") {
//       result[key] = value;
//     }
//   } while (key != "stop" && value != "stop");

//   return result;
// }

// let newArr = createObj();

// console.log(newArr);

//#5

// const createFruitsObj = () => {
//   let friutName = promt("Enter you fruitName");
//   let quatity = promt("Enter quatity");
//   const obj = new Object();
//   if (quatity > 1) {
//     obj.name = friutName + "s";
//   } else {
//     obj.name = friutName;
//   }
//
//   obj.quatity = quatity;
//   return obj;
// };

// console.log(createFruitsObj("apple", 15));

//#6
// const discountObj = () => {
//   let productName = prompt("Enter Product Name");
//   let productQty = +prompt("Enter Product Quatity");
//   let productPrice = +prompt("Enter Product Price");
//   let productDiscount = +prompt("Enter Product Discount");

//   const obj = new Object();

//   if (productDiscount > 0) {
//     obj.productname = productName;
//     obj.productQty = productQty;
//     obj.productPrice = productPrice;
//     obj.productDiscount = 1 - productDiscount / 100;
//   } else {
//     obj.productname = productName;
//     obj.productQty = productQty;
//     obj.productPrice = productPrice;
//   }

//   return obj;
// };

// const calculatePrice = (obj) => {
//   let sum = 1;
//   let count = 0;
//   for (let key in obj) {
//     let currentValue = obj[key];
//     console.log(currentValue);
//     if (typeof currentValue == "number") {
//       sum *= currentValue;
//       count++;
//     }
//   }

//   if (sum == 1) {
//     sum = 0;
//     return sum;
//   }
//   return sum;
// };

// let testObj = discountObj();
// // console.log(testObj);
// // console.log("testObj" + testObj);

// let result = calculatePrice(testObj);

// console.log(result);

//#7
// const notebook = {
//   brand: "ASUS",
//   model: "Vivobook D413IA-EB303TS",
//   processor: "AMD Ryzen 7 4700U 3.6GHz",
//   graphics: "Integrated Graphics : AMD Radeon Graphics",
//   ram: "8GB DDR4 Onboard",
//   storage: "512GB PCIe NVMe M.2 SSD",
// };

// const cloneNoteBook = {};

//#1.1
// for (let key in notebook) {
//   cloneNoteBook[key] = notebook[key];
// }

//#1.2

// const cloneNoteBook = Object.assign({}, notebook);

// console.log(cloneNoteBook);

//#2
// const state1 = { username: "john", point: 100, loading: true };

// const state2 = Object.assign({}, state1, {
//   loading: false,
//   point: 75,
//   success: true,
// });

// console.log(state2);
// console.log(state1);

//#3
// const permission1 = { canView: false, canDelete: false };
// const permission2 = { canUpdate: true, canCreate: true };
// const permission3 = { canCreate: false, canDelete: true };
// const permission4 = { canView: true };

// const permission = Object.assign(
//   {},
//   permission1,
//   permission2,
//   permission3,
//   permission4
// );

// console.log(permission);

//
// --> "Constructor function & new keyword"

//#1

// function Calculator() {
//   this.number1 = 0;
//   this.number2 = 0;

//   this.read = function () {
//     let value1 = +prompt("enten first number");
//     let value2 = +prompt("enten second number");

//     this.number1 = value1;
//     this.number2 = value2;
//   };

//   this.sum = function () {
//     return this.input1 + this.input2;
//   };

//   this.mul = function () {
//     return this.input1 * this.input2;
//   };
// }

// let result1 = new Calculator();

// result1.read();
// result1.sum();
// result1.mul();

//#2

function Accumulator(startingValue) {
  this.currentValue = startingValue;

  this.read = function read(value) {
    this.currentValue += value;
  };

  this.show = function show() {
    console.log(this.currentValue);
  };
}

let result1 = new Accumulator(10);

result1.read(10);
result1.show();
