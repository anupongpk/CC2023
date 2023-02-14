/* Iterable 


--> Iterable Object
    Object ที่สามารถใช้ for…of ได้ เรียกว่า Iterabl
    เช่น array , string รวมทั้ง map กับ set;





--> Array-likes-Object
  
  ## Array.from
  ใช้สำหรับสร้าง array จาก Array-likes หรือ Iterable object

  let arrayLike = {
  0: "ice",
  1: 19,
  length: 2,
};

let arr = Array.from(arrayLike);

for (let value of arr) {
  console.log(value);
}


--> Map
  Map คือ ชุดของข้อมูล key-value เหมือน Object แต่มีข้อแตกต่างที่สำคัญคือ key ของ Map เป็นประเภทข้อมูลใดก็ได้ ไม่จำกัดแค่ String เหมือน Object 
  Method และ Properties ที่สำคัญของ Map
  
    new Map([iterable]) – creates the map.

    const recipeMap = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion', 50]
    ]);



    map.set(key, value) – stores the value by the key.
    map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.

  ex.1
  let map = new Map();

  map.set("1", "ice");
  map.set(2, "Test");

  console.log(map);
  console.log(map.get(2));
  console.log(map.size);



  --> Set
    Set คือ ชุดของข้อมูลคล้าย Map และ Object แต่มีข้อแตกต่างที่สำคัญคือ Set ไม่มี key มี value เพียงอย่างเดียว 
    คุณสมบัติที่สำคัญของ Set คือ จะเก็บค่า value ที่ไม่ซ้ำกันเท่านั้น
    
    Method และ Properties ที่สำคัญของ Set
    new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
    
    set.add(value) – adds a value, returns the set itself.
    
    set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
    
    set.has(value) – returns true if the value exists in the set, otherwise false.
    
    set.clear() – removes everything from the set.
    
    set.size – is the elements count.
*/

let arr = [1, 2, 3, 44, 4, 44, 4, 44, 55, 66, 77, 99];
let set = new Set();

// set.add("John");

set.add(arr);

console.log(set);
