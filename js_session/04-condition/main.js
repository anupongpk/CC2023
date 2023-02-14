/* 

-------- Logical Operators ---------

## || (OR) ==> หา first truthy value;

- เริ่มจากซ้ายไปขวา  --> ถ้า เจอตัวที่ True ตัวแรก ก็จบเลย
- เราสามารถกำหนดค่า Default 

let username = prompt("Enter username") || "Guset"



## && (AND) ==> หา ตัวที่ false ตัวแรก

-ถ้าเจอ false ตัวแรก จะ return false ตัวแรก
-ถ้าเจอ trues ทั้งหมดจะ return true ตัวสุดท้าย
    ex. let username = promt("Enter Username");
        username && alert(username) --> หมายถึงว่า ถ้า username มีค่าให้ alert (username) ต่อ, ถ้าไม่มีให้ ก็จบ statement นี้เลย
        (true)      (true)




-------- Condition ---------

## if statement

## if else statement

## else if statement

## Ternary Oparetor --> '?' 
ternary ก็คือ operator ที่มี 3 oparand

    ex.
    let a = 10;

    let b = a>0 ? "Positive Number" : "Negative Number";


-------- Nullish coalescing --> '??' ---------

เช็คว่าเป็นค่า null หรือ เป็นค่า undefined หรือป่าว

ex. let input = prompt("Enter contact person");
    let contactPerson = input ?? "newbie";



-------- Swicht Case --------

switch(xx)
{
    case 'value1' :
        do something
        break;
    case 'value1' :
        do something
        break;
    default  :
        do something
}






*/
