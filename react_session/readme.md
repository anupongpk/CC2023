1.  Intro to React

    ## SPA (Single page application) = เว็บไซต์ที่มีหน้าเดียว (มีไฟล์ html แค่หน้าเดียว)

        ข้อดี
         - มันทำให้ลดปริมาณการ ลด ของข้อมูล
         - มี performance ดีขึ้น


        ข้อเสีย
         - Google engine อาจจะไม่ดี

    ## React คือ javascript library ที่ใช้ในการสร้าง UI

         - ช่วยให้เราสร้าง UI ที่มีความซับซ้อนได้ง่าย รวดเร็ว และช่วยลดความผิดพลาดในการเขียนโปรแกรม
         - มี library อื่นๆ ที่ให้เราได้เลือกใช้
         - เร็วว่า vanilla javascript

    ## React จะใช้เทคโนโลยีแบบ component-Based

         - Declaraive = จะ render ตาม data เท่าที่จำเป็น ที่เปลี่ยนแปลง

    ## Intro JSX (JavaScript Syntax eXtensio)

        - โดนจะมี babel แปลงโค้ด HTML เป็น โค้ด javascript

2.  การ Create React App

        - npx create-react-app project-name

    ## Module การ import and export

        - module คือ หนึ่งไฟล์ js

        - มีอยู่ 2 วิธี ดังนี้ 1. name export และ 2.default export

        - 1. default export (จะ export ได้ 1 ครั้งต่อ module)
        function sayHi() {
          console.log("Say Hi");
        }
        export default sayHi;

         1.1 การ import จะสามารถ import แล้วตามด้วยชื่อได้เลย
         import sayHi from './address-module'

        - 2. name export (จะ export ก็อันก็ได้ ต่อ module)
        function sayHi() {
          console.log("Say Hi");
        }

        function sayGoodBye() {
          console.log("Say Goodbye");
        }

        2.2 การ import จะต้อง import
        export  { sayHi, sayGoogBye };

3.  JSX

    ## what's JSX

        - คือ ส่วนขยายของ JavaScript
        - ทำให้สามารถเขียนโค้ดคล้าย HTML ได้ใน Javascript โดยใช้ตัวแปลงชื่อ Babel
        - สามารถแทรก แทรกตัวแปรหรือ Javascript expression เข้าไปใน JSX ได้ โดยใช้ {} ทั้งใน tag และ classname
          ex. const nickname = "John";
              const element = <h1>Hello JSX and {nickname}</h1>;
        - JSX มี root element ได้เพียง element เดียว หากมีหลายอันจะ error

        - JSX จะ Render ได้เฉพาะ String, Number, Array of JSX, String, Number เท่านั้น

        -
