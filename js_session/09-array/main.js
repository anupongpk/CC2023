/* Array


--> push,pop,unshift,shift

การเพิ่มของใน array 

array.push();
array.unshitf();

การลบของใน array 
array.push();
array.unshitf();


--> Loop through Array


## for..in
คือ การ loop ตัวแปร  => ตัวแปรจะเก็บแต่ละ index


## for..of 
คือ การ loop ตัวแปร  => ตัวแปรจะเก็บแต่ละ value 


## forEach
-ใช้ในการ รัน ฟังก์ชั่น กับทุก element ใน array
-จะมี parameter 
-จะคืนค่า undefined

ex. arr.forEach((item , index, array)=>{

})


--> Array Method : create , clone , combine

## concat 
** อาร์เรย์ตัวตั้งต้น จะไม่่เป็นแปลง  แต่ต้องเอา ตัวแปรมารับ array ตัวใหม่

arr.concat(arg1, arg1)

let arr = [1, 2];

console.log(arr.concat([3, 4])); // 1,2,3,4
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

## slice
** อาร์เรย์ตัวตั้งต้น จะไม่่เป็นแปลง  แต่ต้องเอา ตัวแปรมารับ array ตัวใหม่

let arr = ['t', 'e', 's', 't'];
console.log(arr.slice(1, 3)); // e,s (copy from 1 to 3)
console.log(arr.slice(-2)); // s,t (copy from -2 till the end)


## SPREAD 
การ clone arr มาเลย

ex.  cosnt animals = ["Rat", "Pig", "Chicken"];

const newAnimal = [...animals] //["Rat", "Pig", "Chicken"] 



--> Array Method : modify - mutate
## splice
-arr.splice(start[, deleteCount, elem1, ..., elemN])
-ใช้ได้ทั้งเพิ่ม ลบ และแก้ไข element ของ Array

ตัวอย่าง
let arr = ['I', 'study', 'JavaScript'];
arr.splice(1, 1); // from index 1 remove 1 element
console.log(arr); // ["I", "JavaScript"];



--> Array Method : searching


## indexOf, lastIndexOf , includes
ทั้ง 3 Method ใช้วิธีการเปรียบเทียบแบบ strict comparison (===)


## arr.find
จะต้องใส้ parater เป็น function (callback function) 


## arr.filter
จะต้องใส้ parater เป็น function (callback function)  
จะ return เป็น element ที่เราหา


--> Array Method : transform


## map

ex.1

จะต้องมี return ค่าใหม่ออกมา โดยมันจะ modified ค่าใหม่ออกมา

const arrayFruit = ["apple", "banana", "cat"];
const newArray = arrayFruit.map((item) => {
  return item.toUpperCase();
});
console.log(newArray); //[ 'APPLE', 'BANANA', 'CAT' ]


ex.2
const CURRENT_YEAR = 2023;
const arrayFruitBirth = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-01-01" },
  { name: "watermelon", birth: "1985-01-01" },
];

const newArray = arrayFruitBirth.map((item) => {
  let cloneObj = { ...item };
  let age = CURRENT_YEAR - item.birth.slice(0, 4);
  cloneObj.age = age;
  return cloneObj;
});

console.log(newArray);


## Sort

  -arr.sort(fn) ใช้สำหรับเรียง element ใน Array ( สามารถเรียงจาก มากไปน้อย และ น้อยไปมาก )
  -หากไม่กำหนด fn arr.sort จะเรียง element โดยใช้การเปรียบเทียบ element แบบ String

    function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
    }
    let arr = [2, 15, 1];
    arr.sort(compareNumeric);
    console.log(arr); // 1, 2, 15

## Reverse
    การเรียงจากหลังมาน้อย
    let arr = [1, 2, 3, 4, 5];
    arr.reverse();
    console.log(arr); // 5,4,3,2,1



## Split
    ใช้ในการแยกคำใน String 

    let names = 'Bangkok, Tak, Nan';
    let arr = names.split(', ');
    console.log(arr); // ['Bangkok', 'Tak', 'Nan']


## Join
    ในการ    

    let names = ['Bangkok', 'Tak', 'Nan'];
    let str = names.join(':');
    console.log(str); // Bangkok:Tak:Nan



--> Array Method : reducer

## reduce

    ไม่ต้องเป็นต้องสร้าง Array ตัวใหม่

    let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
    }, [initial]);

    initial = สามารถเป็นได้หลาย ค่า เช่น 0, "", []


let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];

let result = names.reduce(function (acc, item) {
  if (!acc[item]) {
    acc[item] = 1;
  } else {
    acc[item] = acc[item] + 1;
  }

  return acc;
}, {});

console.log(result);


let str = "I live in Thailand";

let lowercase = str.toLowerCase().split("");

let result = lowercase.reduce(function (acc, item) {
  option 1
    if (item.trim() != "") {
      if (acc[item]) {
        acc[item] = acc[item] + 1;
      } else {
        acc[item] = 1;
      }
    }

  option 2

  if (item.trim() != "") {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
  }

  return acc;
}, {});

console.log(result);




--> Array Method : isArray 

  ให้เช็คดูว่า ใช่ อาร์เรย์หรือเปล่า? 
  Array.isArray(value) returns true if the value is an array, and false otherwise.



--> Object Keys, Value , Entries (จะ return array)

    Object.keys(obj) – returns an array of keys. (จะ return ออกมาเฉพาะ keys)
    Object.values(obj) – returns an array of values. (จะ return ออกมาเฉพาะ values)
    Object.entries(obj) – returns an array of [key, value] pairs.





*/

// let user = { name: "John", age: 27 };
// for (let key of Object.keys(user)) {
//   console.log(key); // name then age
// }
// for (let value of Object.values(user)) {
//   console.log(value); // John then 27
// }
// for (let pair of Object.entries(user)) {
//   console.log(pair); // ['name', 'John'] then ['age', 27]
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log(salaries);
// console.log(Object.keys(salaries));
// console.log(Object.values(salaries));
// console.log(Object.entries(salaries));
