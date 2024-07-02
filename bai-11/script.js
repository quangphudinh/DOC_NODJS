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
console.log(this);

//3.2 : this trong sự kiện javascript 
// khi gán sự kiện cho một phần tử HTML , thì this chính là phần tử HTML đó
const button = document.querySelector()