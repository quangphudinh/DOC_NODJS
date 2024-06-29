// var button = document.querySelector('button');
// button.onclick = function(){
//     alert('Hello CC');
// }
var a = 3;
var b = 5;
var c = a + b;
console.log(c)

// 4.1 Kiểu dữ liệu nguyên thủy NUMBER
var a = 10;
var b = 10.5;
var c = Infinity; // duong vo cung
var d = -Infinity; // am vo cung
var e = 10/"a";//NaN;
console.log(a, b, c, d, e)

// 4.2 Kiểu dữ liệu nguyên thức STRING
var a = "Hello";
var b = 'Hello';
var c = `Hello`;
console.log(a, b, c)

// 4.3 Kiểu dữ liệu nguyên thức BOOLEAN
var a = true;
var b = false;
console.log(a, b)

// 4.4 Kiểu dữ liệu nguyên thức NULL
var a = null;
console.log(a)

// 4.5 Dữ liệu phức tạp (Complex Data) : 
//Function
function tinhTong(a, b){
    return a + b;
}
var c = tinhTong(5, 10);
console.log(c)

//Object
var a = {
    name: 'Dinh Quang Phu',
    age: 22
}
console.log(a)
console.log('My name is : ' + a.name)

//Array
var a = [1, 2, 3, 4, 5];
console.log(a)