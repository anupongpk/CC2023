/* JS NEW GEN 


--> Rest Parameter
    - สร้าง ฟังก์ชั่น ที่มี parameter ที่ไม่จำกัด
    - จะใช้ จุดสามจุด ... 
    - จะต้องอยู่หลัง สุด เท่านั้น
    
    const gerPerson = (firstname, lastname, ...hobbies) => {};



--> Spread Operator (...)
    - expand ค่าต่างๆ ใน iterable ทั้ง array และ object
    - กระจายตัวแปร

    นิยมใช้ใน
    -clone array
    -clone object
    -merge array 
    -merger object
    -concat array


    const arr = [1,2,3,4]
    const newArr = [...arr]


    note: ถ้าไม่ใส่ return จะต้องใส่วงเล็บแทน ดังตัวอย่าง

    const getPerson = (fname, lname, ...hobbies) => ({
        firstname,
        lastname,
        hobbies,
        numHobbies : Hobbies.length
    })

     const getPerson = (fname, lname, ...hobbies) => {
        let resutl ={ 
        firstname,
        lastname,
        hobbies,
        numHobbies : hobbies.length
    }
        return result1
    }


--> Destructuring
    -แตก array หรือ object เป็น ตัวแปรย่อยๆ
    
    ตัวอย่าง

   -การ Destructing object  
    จะใช้ชื่อ key เลย

  const person = {
    firstName: "John",
    lastName: "Doe",
    hobbies: ["Sport", "Shopping"],
    address: {
      province: "Bangkok",
      ditrict: "Pathuwan",
    },
    friends: [
      {
        firstName: "Jim",
        lastName: "Carry",
        phoneNumber: "099999999",
      },
      {
        firstName: "Jim02",
        lastName: "Carry02",
        phoneNumber: "099999999",
      },
    ],
  };

  const { firstName, lastName , ...otherInfo } = person; // firstName = "John" , lastName = "Doe"
  console.log(otherInfo) // ตั้งแต่ Hobbies ลงมา

  const { address: province } = person; // province => 'bangkok'

  

  -การ Destructing Array



const numbers = [22, 31, 54, 67, 989, 87];
const [firstNumber, secondNumber, ...other] = numbers;
console.log(firstNumber); // 22
console.log(secondNumber); // 31
console.log(other); //[ 54, 67, 989, 87 ]



// --> Class
          - property
          - method
  ##OOP

  - มองการจัดการโค้ดเป็นแบบ "วัตถุ" ที่อยู่รอบๆตัวเรา
  - จะประกอบไปด้วย คุณสมบัติ หรือ คุณลักษณะ (properties) และ การกระทำ (method)
  - constructor() => มันจะรัน ฟังก์ชั่นนี้ หนึ่งครั้ง
  - บางครั้งค่า property ไม่มี initial values ก็ไม่ต้องเขียนก็ได้
  - ประกาศ property ไม่ต้องมี var let const นำหน้า เช่นเดียวกับ method ที่ไม่ต้องมี function นำหน้า
  
  ex.
    class User {

      name = 'John';

    sayHi() {
      console.log(`Hello, ${this.name}!`);
    }

    }
    new User().sayHi(); // Hello, John!

  ## inheritance
    class สามารถสืบทอดต่อกันได้
    เราจะใช้ "extends"

  ## การ override
    การประกาศฟังก์ชั่น ใน child class ที่เหมือนกับ parent class
    ทำให้ method ใน child class จะ override method ใน parent class
    
  ## super
    ให้ไปเรียกใช้ method ของ parent class

  ## เบื้องหลัง  javascript 



class User {
  name;

  constructor(name, password, role) {
    this.name = name; // set ค่าตัวแปร name
    this.password = password;
    this.role = role || "normal-user";
  }

  login(password) {
    console.log("Login");
  }

  changePassword(newPassword) {
    console.log("Change Password");
  }
}

const a = new User();
console.log(a);

//การสืบทอด


//
class Admin extends User {}

const admin = new Admin("ice_admin");

console.log(admin); // { name: 'ice_admin', password: undefined, role: 'normal-user' }

// การ override

class Customer extends User {
  login(password) {
    console.log("Login in Customer");
  }
}





// --> Prototye ( แม่แบบทุกสิ่งทุกอย่างของ JavaScript )
มันจะสืบทอด ออกมาเป็น ขั้นๆ

*/
