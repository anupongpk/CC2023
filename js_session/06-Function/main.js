/* 

-------- Function Declaration---------

function sayHello(name){
    return `Hello ${name}`
}

-------- Function Expression---------


const sayHello = function(name) {
    return `Hello ${name}`
}


-------- Arrrow Declaration---------\


## 1 Basic Syntax

const sayHello = (name) => `Hello ${name}`



## 2 Single Parameter
- ถ้ามี parameter เดียว ไม่ต้องมีวงเล็บ ไม่ต้องมี Return

const sayHello = name => `Hello ${name}`;


## 3 Multiline Function
- ถ้ามีปีกกา อย่าลืม return

const sayHello = (name, age) => {
    let sentence = `Hello, ${name}. I am ${age} year old`;
    return sentence;
}



-------- Call Back ---------

ฟังก์ชั่นที่ ถูกส่งไปเป็น parameter ของอีกฟังก์ชั่นหนึ่ง



function myFunc (a,b,callBack){
    callBack(`${a},${b}`)
    return a*b
}



-------- Call Back ---------


*/
