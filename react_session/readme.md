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

4.  components and props

        - components คือส่วนประกอบ โดย React จะมองแต่ละ component แยกออกจากกัน

        - components สามารถ reuse ได้ และกระจาย logic

        - จะเขียน component ได้ 2 แบบ **Function component และ Class component (แต่นิยม สร้างเป็น Function component)

        - Conponent จะขึ้นต้นด้วยตัวพิมพ์ใหญ่อยู่เสมอ

        - props ก็คือ parameter ใน function component เป็นการส่งข้อมูล ผ่านแต่ละ component โดยจะส่งได้ทิศทางเดียว จาก Parent to Child

        - เมื่อส่ง props แล้ว ห้าม modify props เด็ดขาด

5.  Basic CSS Styling

        - จะมีสองสไตล์ คือ 1. Inline CSS , 2. External CSS , 3. CSS Module , 4. CSS in JS

        - CSS Module = กำหนด สไตล์ไว้ในตัวแปรก่อน
          ex. function App() {
              const style = {
                color: 'white',
                backgroundColor: 'Yellow'
              };
              return <div style={style}>Hello World!</div>;
            }

        - ดูเพิ่มเติมในชีท

6.  Handling Event

        - คือ การ add event listener เข้าไป และ detect การใช้งานของ User
        - นิยมใช้ onChange , onClick
        - ถ้าต้องใช้ parameter ด้วย ต้องใช้ anomynouse function

7.  state

        - state คือ ดาต้า หรือ ผลลัพธ์ของ user ที่ action ต่อเว็บไซต์ ณ เวลาใด เวลาหนึ่ง

        - ทุกครั้งที่ state เปลี่ยนมันจะ Re render แล้ว สร้าง vitual DOM

    ## virtual DOM = DOM เสมือน

        - จากนั้น จะเปรียบเทึยบกับ vitual Dom ก่อนหน้า แล้วนำส่วนที่ ต่าง ไปใส่ใน Real DOM

        - Recociliation

        - โดยจะต้องใช้ function usestate ในการกำหนด state

        - การ set state มีสองวิธี

8.  Conditional Rendering

        - คือ การ render ui ตามเงื่อนไขที่กำหนด

        - มีวิธีการดังนี้  Element Variables , Inline If with Logical && Operator , Inline If-Else with Conditional Operator

        - วิธี 1: store jsx in a variable
          function Welcome(props) {
          const isLogged = props.isLogged;
          const renderContent = isLogged ? <h1>Welcome back !</h1> : <h1>Welcome Guest</h1>;
          return <div>{renderContent}</div>;
        }

        - วิธี 2: && Operator
          function Message(props) {
          const unread = props.unreadMessage;
          return <div>{unread > 0 && <h1>You have {unread} unread message</h1>}</div>;
        }

        - วิธี 3 : การใช้ if-else ในรูปแบบ ternary แทรกใน jsx
          function Welcome(props) {
          const isLogged = props.isLogged;
          return <div>{isLogged ? <h1>Welcome back !</h1> : <h1>Welcome Guest</h1>}</div>;
        }
