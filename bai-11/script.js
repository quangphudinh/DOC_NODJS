//1. Scope : pham vi truy cap , no de cap den ngu canh cua doan code
//- pham vi toan cuc (global): mot bien nam o pham vi toan cuc thi bien do su dung o dau cx dc
//- pham vi cuc bo (local) : mot bien duoc trien khai trong 1 ham thi bien nay la bien cuc bo va chi su dung dc o ham do
// const a = 10;
// function test(){
//     console.log(a)
// }
// test();
//cuc bo : local
// function test(){
//     var a = 10;
//     console.log(a)
// }

//2. Bien trong hoisting
//hoisting : co the su dung 1 bien xong sau do moi can khai bao

// console.log(a);
// var a = 'hello world';

// tuong duong voi
// var a;
// console.log(a);
// a = 'hello';
// console.log(a);

//2.2 : Tu khoa let , const va var trong hoisting
// su dung var : neu bien chua chua gia tri thi tra ve undefined
// su dung let hoac const : neu bien chua gan gia tri thi se tra ve loi 'a is not defined' (bien a chua dc dinh nghia)
// console.log(a);
// let a = 10;
// console.log(a);
// const a = 10;

//2.3 Ham trong hoisting
// - Declaration Funtion : co tinh hoisting - cu phap : funtion tenHam(){//code}
    // test();
    // function test(){
    //     console.log('hello')
    // }
// - Expression Funtion : Khong co tinh hoisting - cuphap : var tenBien = function(){//code}
    // test1();
    // console.log(test1);
    // var test1 = function(){
    //     console.log('Code phan Expresstion Function')
    // }
// - Arrow Function : Khong co tinh hoisting - cu phap : var tenBien = () => {//code} 
    // var test2;
    // test2();
    
    // test = () => {
    //     console.log('Code phan Arrow Function')
    // }

//3 : Từ khóa "this" : sẽ trỏ về đối tượng mà nó đang thuộc về
//3.1 : nếu 'this' ở ngoài cùng của chương trình thì 'this' sẽ trả về đối tượng windown
// console.log(this);

//3.2 : this trong sự kiện javascript 
// khi gán sự kiện cho một phần tử HTML , thì this chính là phần tử HTML đó
// const button = document.getElementById('button');
// console.log(button);
// button.addEventListener('click' , function(){
//     console.log(this);
// })

//3.3 : This trong javascript object
// var inforUser = {
//     fullName : 'Dinh Quang Phu',
//     email : 'ZyqFP@example.com',
//     phone : '0123456789',
//     getPhone : function(){
//         console.log(this.phone); // this.phone
//         // console.log(inforUser.phone);
//     },
//     getFullName : function(){
//         console.log(this.fullName); 
//     },
//     cccd :{
//         fullName : 'P dep trai 123',
//         getFullName : function(){
//             console.log(this.fullName);
//         }
//     }
// }

// inforUser.getPhone();
// inforUser.getFullName();
// inforUser.cccd.getFullName()

//3.4 : This trong arrow function
// arrow function khong ton tai doi tuong this 
//- khi su dung this trong arrow function thi se lay doi tuong windown
// const button = document.getElementById('button');
// console.log(button);
// button.addEventListener('click' , () => {
//     console.log(this); // lay ra windown
//     console.log(button); //lay ra button
// })

//----------------------------------------------------------------------------
//4.MODULE
//4.1 : Module trong javascript : là 1 file javascript bth nhưng 
//được đặt tên có ý nghĩa dựa theo dòng code bên trong nó - tái sd code

//4.2 : khai báo và sử dụng
//khai báo module : Export 
//sử dụng module : Import

///4.3 : Doi ten Module 
//cach 1 :  trong file module : export {oldName as newName};
//          trong file khac : import {newNam} from 'duong_dan_file_module.js'; 
//cach 2 : Doi file trong file import : 
// import {oldName as newName } from  'duong_dan_file_module.js';    


//4.4 : Default export module
//- Dung de export mac dinh
//- Moi file chi co 1 ham hoac 1 bien dc exprort default
//trong file module : export default function tenHam(){//code};
//trong file can dung den module do :import tenHam from 'dung_dan_file_module.js';

//-------------------------------------------------------
//5.JSON :javascript object notation
//k cho phep su dung  : funtion , date ,undefind...
//duoc viet duoi dang Object : 'key' : value

//5.1 : 
//Object cuar javascript
    // var objectJS = {
    //     name : 'Dinh Quang Phu',
    //     age : 20,
    //     phone : '0123456789',
    //     email : 'ZyqFP@example.com'
    // };
//Object cua json
    // var objectJSON = `{
    //     "name" : "Dinh Quang Phu",
    //     "age" : 20,
    //     "phone" : "0123456789",
    //     "email" : "ZyqFP@example.com"
    // }`;

//5.2 : ViDU
// //vd1 : Json co gia tri la Object
// var objectJSON = `{
//     "name" : "Dinh Quang Phu",
//     "age" : 20,
//     "phone" : "0123456789",
//     "email" : "ZyqFP@example.com"
// }`;
// console.log(typeof objectJSON);
// console.log(objectJSON);
// //chuyen json thanh objectjs
// const objectJS = JSON.parse(objectJSON);
// console.log(objectJS);
// //chuyen tu JS sang Json
// const json = JSON.stringify(objectJS);
// console.log(json);

//vd2 : Json co gia tri la String

// var stirngJSON = `"abc"`;
// //chuye tu JSON sang StringJS
// var stringJS = JSON.parse(stirngJSON);
// console.log(stringJS);
// //chuyen tu StringJS sang JSON
// var stringJSON = JSON.stringify(stringJS);
// console.log(stringJSON);

//vd3 : Json co gia tri la Number
// var numberJSON = `10`;
// console.log(numberJSON);
// //json chuyen thanh number
// var numberJs = JSON.parse(numberJSON);
// console.log(numberJs);
// //number chuyen thanh json
// var numberJSON2 = JSON.stringify(numberJs);
// console.log(numberJSON2);

//vd4 : Json co gia tri la Boolean
// var BooleanJSon = `true`;

// //json chuyen thanh JS
// var BooleanJS = JSON.parse(BooleanJSon);
// console.log(BooleanJS);
// //JS chuyen thanh json
// var BooleanJSon2 = JSON.stringify(BooleanJS);
// console.log(BooleanJSon2);

//vd5 : Json co gia tri la Array
// var arrayJSON = `[
//     {
//         "name" : "Dinh Quang Phu",
//         "age" : 20
//     },
//     {
//         "name" : "Dinh Quang Phuc",
//         "age" : 6
//     }
// ]`;
// //chuyen tu JSon thanh ArrayJS
// var arrayJS = JSON.parse(arrayJSON);
// console.log(arrayJS);
// //chuyen tu ArrayJS thanh JSon
// var arrayJSON2 = JSON.stringify(arrayJS);
// console.log(arrayJSON2);

// //vd6 : Json co gia tri la Null
// var nullJSon = `null`;

// //json chuyen thanh JS
// var nullJS = JSON.parse(nullJSon);
// console.log(nullJS);
// //JS chuyen thanh json
// var nullJSon2 = JSON.stringify(nullJS);
// console.log(nullJSon2);