/*
 JS in Browser


 --> DOM (Document Object Model)
    โมเดล อย่างหนึ่ง ที่มองว่า HTML element เป็น Object (ข้อมูลใน)
    ที่มี properties และ มี method ที่สามารถเข้าถึง HTML Element  ได้
    รวมถึงใส่ event ลงไป ใน DOM ได้ 


 --> BOM (Browser Object Model)
     คือ มอง โมเดล ที่นอกเหนือ document จะทำงานทุกอย่างยกเว้น document.
     เช่น navigator() ,  location(), 

        location.href() 
        location.hostname() 
        location.protocol() 
        location.pathname() 
        location.assign() 
      

    
 --> Dom Tree
     คือ ลำดับขั้นของ HTML element เช่น parent, sibling,  child , ancestor, descendant


 --> Select DOM 
      นิยมใช้ HTML element by id
      ** Find HTML element by CSS selectors

      ## Find HTML element by id
         document.gerElementById("id_name") ไม่ต้องใส่ dot (.) หรือ sharp (#)

      ## Find HTML element by classname
         document.querySelectorAll('div'); (ผมลัพธ์ออกมาจะเป็น array ของ)
         document.querySelector(".main"); (จะออกมาเฉพาะ class อันแรก)

   
 --> Modify DOM

      //การทำทั่วไป
      ## element.innerHTML = เพิ่มเนื้อหาใน element

      ## element.attribute = เพิ่มค่า attribute (มีหลาย attribute)

      ## element.style.property = new style (กำหนดสไตล์)

      ## element.setAttribute(attribute, value)

      ## document.createElement(tag) = สร้าง tag ใหม่


      //การทำ element ไปแสดง  (insert)
      ## node.append = การทำ element ที่เราสร้างไปแทรก ไปต่อท้ายสุดใน tag ก่อนหน้า ดอท

      ## node.prepend = การนำ element ไปไว้ข้างใน tag ชั้นบนสุด

      ## node.before() = การนำ element ไปไว้ก่อนหน้า tag ที่เรา selected
  
      ## node.after() = การนำ element ไปไว้ก่อนหน้า tag ที่เรา selected


      //การลบ (removal)
      ## node.remove() = การลบ element นั้น


      //Styles and classes
      ## elem.classList 
         - elem.classList.add/remove("class") ไม่ต้องใส่ dot
         - elem.classList.toggle("class")
         elem.classList.contains("class") 

   --> Browser Event

      ##  Event คือ เหตุการณ์ที่เกิดขึ้นบน DOM เช่น การคลิก , การ Drag , การ Hover, และอื่นๆๆ
         Examples of HTML events
            - When a user clicks the mouse
            - When a web page has loaded
            - When the mouse moves over an element
            - When an input field is changed
            - When an HTML form is submitted

      ## Event Handlers 
         วิธีการทำ ผูก event handlers มีดังนี้
            - HTML-attribute
            - DOM property
            - addEventListener *** นิยมสุด

         -->  HTML - attribute (เขียนเข้าไปใน HTML เลย)
              คือการใส่ property  on.... ใน tag เปิด ของ element
              ex. <button onclick ="alert('click button')"> Click Button </button>;


         --> DOM property (เราต้อง select element ก่อนแล้ว ค่อย เพิ่ม object event เข้าไป)
             const elem = document.getElementById('elem');
             
             elem.onclick = function () {
               alert('Thank you'); 
             }

             เมื่อต้องการลบ event จะกำหนดให้ elem.onclick = null;

         --> addEventListener (เราจะเรียก method 'addEventListner' )
             เราจะใส่ addEventListener แล้วตามด้วย event และ callback fucntion
             
             const elem = document.getElementById('elem');
             
             elem.addEventListener('click', event => {
               event.preventDefault();
               alert('Redirect to google is disabled');
            });

            เมื่อต้องการลบ ให้ใช้คำว่า .removeEventListener(... , ชื่อ function)

      ## Event Object 
         จะเป็น event ที่ browser สร้างขึ้น โดยมีรายละเอียดดังนี้ (มันจะ parameter "event" ให้เราอยู่ละ)
         -event.type

         -event.target ***


      ## Browser default actions
         คือ เป็น action ที่ browser จะทำโดยอัติโนมัติ หลังจากที่ user  กระทำสิ่งเหล่านี้
         
           - A click on a link – initiates navigation to its URL.
           - A click on a form submit button – initiates its submission to the server.
           - Pressing a mouse button over a text and moving it – selects the text.
      
         แต่เรา สามารถหยุด default action ได้โดยการ ใช้ method event.preventDefault()

         elem.addEventListener('click', event => {
            event.preventDefault();
            alert('Redirect to google is disabled');
         });



  };




         

         
*/
