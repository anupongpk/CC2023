/* 

-------- Object ---------

\
-จะเป็นหลักการ key : value
-สมารถเก็บ function ได้ด้วย **

--> การประกาศ Object
##  แบบที่ 1

const myObj = new Object;




##  แบบที่ 2

const person = {
    firstName : "John",
    lastName : "Doe",
    age : 27,
    isAdmin = true,
    address : {
        road : "Sukhumvit",
        province : "Bangkok"
    }
}


--> การเข้าถึง Object
-ใช้ได้ทั้ง .(dot) และ square bucket

person.firstName // "John"
person.age // 27


--> การอัพเดท Object

person.firstName // "John"

person.firstName = "Micheal"
person.firstName // "Micheal"



--> การ Delete Object

delete person.firstName; 



--> Property Short Hand

let username = "ice"
let password = "1234"

const user = {
    username,
    password
}


--> "in" Operator
เราจะใช้ในการตรวจสอบว่ามีค่า key นั้นอยู่ใน object หรือไม่
key ที่ใช้ เช็คจะต้องเป็น string 

ex.

const user = {
    name : "John",
    age : 27
}


console.log("name" in user) // true 
console.log("birthDate" in user) // false




--> Optional Chaining '?.'
ประมาณว่า สามารถ .(dot) ต่อได้ไหม ถ้าไม่ จะ return 'underfinded' กลับมา




--> "for...in loop"

- จะรัน ตามจำนวน key และสามารถ log ชื่อ key ได้


##ex.1
let user {
    name : "Ice",
    age : 18,
}

for (let key in user) {
    console.log(key) // name , age

    console.log(user[key]) // "Ice", 18
}



--> "Copied By Reference"

-ถ้าcopy ตัวแปรแบบ Object จะเก็บค่าแบบ copies by reference

ex.
let user = {name: "john"};
let admin = user ( admin จะชี้ไปยัง user  มี address ที่เดียวกัน);





--> การ "Clone Object"

#1  one source
จะใช้ Object.assign( object {}, ตัวที่จะ clone)

ex.




#2 multiple source (อยาก clone หลายตัว)


let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
let user = {name : 'John'}

const result = Object.assign(user, permissions1, permission2);  //จะทำจากซ้ายไปขวา

// { name: "John", canView: true, canEdit: true }



--> "Object Method"

object ที่มี properties value เป็น function จะเรียก function นั้นว่า method ของ object

#ex.1
let user = {
    name : "john",
    age : 30,
    sayHi : function () {alert("Hello")} // ตรงนี้ เรียกว่า method
}


#ex.2
#ประกาศแบบปกติ
const cat = {
    age : 2,
    name : "ChaYen",
    roar : function () {
        alert("Meow Meow")
    }
}

cat.roar(); // จะ alert "Meow Meow" ออกมา

#ประกาศแบบ short hand  จะละ คำว่า function และ : โคล่อน
const cat = {
    name = "Sushi",
    roar() {
        alert("Hello")
    }
}



--> "this keyword"

-ค่า this ใน method คือ Object ที่เรียกใช้มัน และ ขึ้นอยู่กับ บริบท ด้วย
-This = the object “before dot”

****
this  in global, Alone : the window object
this  inside function :  the window object , undefined (in strict-mode)
this  inside method :   the object “before dot” or the invoking object
this  inside arrow function: this is pointing to surrouding parent
this  inside arrow function : inherits the this from the outer function where the arrow function is defined / global
this  when call constructor function : the instance that create by new keyword




// Function Expression
let b = function () {
   console.log(this)
}



//function experssion  จะไม่เอาไปติดใน window
let b = function () {
   console.log(this)
}


b(); // this === window object
window.b() // Error : window.b in not a finction



    **this in arrow function**
    -ต้องประกาศ arrow function ใน perpoties method อีกที เผื่อไม่ให้ losing this
    




--> "Constructor function & new keyword"

จะเป็นการสร้าง Object อีกวิธีหนึ่ง
-จะขึ้นต้นด้วยตัวใหญ่** และ ตอนสร้าง จะใช้คำว่า new นำหน้า

//Deno
function MyConstuctorFN (){

    # step1 : this ={}
    # step2 : defined property

        this.name = name;
        this.age = age;

    # step3 : return this
    
}

//การสร้าง
let instance = new MyConstuctorFN();


ตัวอย่างที่ 1 
function User (name)
{
    this.name = name;
    this.isAdmin = true;
    this.sayHi() = function () {
        alert("Hello")
    }
}

let user1 = new User("ice");  // {name : ice, isAdmin : true, sayHi() : f()alert }



ตัวอย่างที่ 2

function CodeCampStudent (name, age) {
    this.name = name;
    this.age =age;
}

let user1 = new CodeCampStudent ('game', 32) // {name : "game", age : 32}


*/
