//LOCALSTORAGE
// //localStorage.setItem("fullname", "Dinh Quang Phu");
// const fullname = localStorage.getItem("fullname");
// console.log(fullname)
// const test = document.querySelector('#test');
// test.innerHTML = fullname

// //change mode
// const currentMode = localStorage.getItem('mode');
// if(currentMode){
//         //console.log(currentMode)
//         const body = document.querySelector('body');
//         body.classList.toggle(currentMode);//neu chua co thi tem vao - co roi thi xoa
//     }

// const buttonChangeMode = document.querySelector('#change-mode');
// buttonChangeMode.addEventListener('click', () => {
//     const body = document.querySelector('body');
//     body.classList.toggle('dark');
//     const currentMode = localStorage.getItem('mode');
//     if(currentMode){
//         localStorage.setItem('mode',"");//light
//     }else{
//         localStorage.setItem('mode','dark' );
//     }
// })

// const resetMode = document.querySelector('#reset-mode');
//     resetMode.addEventListener('click', () => {
//     localStorage.removeItem('mode');
//     const body = document.querySelector('body');
//     body.classList.remove('dark');
// })

// const clearAll = document.querySelector('#clear-all');
// clearAll.addEventListener('click', () => {
//     localStorage.clear(); //xoa tat ca trong localStorage 
// })
//----------------------------------------------------------------
// 
// const tinhtoan = (a,b) =>{
//     const tinhtong = ()=>
//         {
//             return a + b;
//         }
//     return tinhtong();
// }

// console.log(tinhtoan(1,2))

//VIDU 2 :
// const tinhtoan = (a,b) =>{
//     const tinhtong = ()=>{
//             return a + b;
//     }
//     const tinhhieu = ()=>{
//         return a - b;
//     }
//     const tinhtich = ()=>{
//         return a * b;
//     }
//     const tinhthuong = ()=>{
//         return a / b;
//     }

//     return {
//         tong : tinhtong,
//         hieu : tinhhieu,
//         tich : tinhtich,
//         thuong : tinhthuong
//     }
// }

// const tinh = tinhtoan(50,10);

// const tong = tinh.tong();
// console.log(tong);

// const hieu = tinh.hieu();
// console.log(hieu);

// const tich = tinh.tich();
// console.log(tich);

// const thuong = tinh.thuong();
// console.log(thuong)

//----------------------------------------------
//04 : Default paramenter (Tham số mặc định)
// //ví dụ 1 : Gan mac dinh tai vi tri khai bao
// const tong = (a = 0,b=0) => {
//     return a + b;
// }
// const kq = tong(); // = 0
// const ketqua = tong(10,20); // 30
// const kqua = tong(10); //10
// console.log(ketqua);

//----------------------------------------------
//05 : Spread syntax (cú pháp trải ra) để lặp lại các phần tử của mảng (Array) hoặc đối tuọng (Object)
//cú pháp : ...name

// let listUserDB = ["Le Van A" , "Le Van B" , "Le Van C"];
// let listUserFE = ["Le Van D" , "Le Van E" , "Le Van F"];
// listUserDB = [...listUserDB, ...listUserFE];
// console.log(listUserDB);

// const object1 = {
//     name : "Le Van A",
//     age : 20,
//     address : "Ha Noi"
// }

// const object2 = {
//     ...object1,
//     email : "Lq8Yn@example.com",
//     phone : "0123456789"
// }

// console.log(object2)

//----------------------------------------------
//06: REST PARAMETER :  (tham số còn lại) là tham số địa diện cho những tham số không được khai báo của một function
//cú pháp : ...name
//arrow function
// const tinhTong = (num1,num2,...numbers) => {
//     console.log(numbers);
//     console.log(num1,num2);
// }
// tinhTong(1,2,3,4,5,6,7,8,9,10)

//----------------------------------------------
//07: Destructuring (phá vỡ cấu trúc) dể dễ dàng lấy đc các phần tử của ARRAY hoặc OBJECT
//ARRAY
// const time = ["10" , "20", "30"]; 
// const [hour,minute,second] = time;
// console.log(hour,minute,second);

//OBJECT
const inforUser = {
    name : "Le Van A",
    age : 20,
    address : "Ha Noi"
}
const {name,age,address} = inforUser;
console.log(name,age,address)