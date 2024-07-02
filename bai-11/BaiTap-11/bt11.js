//bai1 : Vi du ve Hosting bien
// var x = 5;
// console.log(x + y); //undefined
// var y = 10;

// //bai2 : Vi dun ve hosting ham
// foo();
// function foo() {
//     console.log("Hello");
// }

// //bai3 : Vi du ve hosting với khối mã (block scope)
// function fo(){
//     if(true){
//         var x = 5;
//     }
//     console.log(x);
// }
// fo();

// //bai4 : Ví dụ về hoisting với let và const (block scope)
// function foo() {
//     if (true) {
//       let x = 5;
//       const y = 10;
//     }
//     console.log(x); //x not defined
//     console.log(y); //y not defined
//   }
//   foo();

//bai 5 : Ví dụ về hoisting với hàm trong một khối mã
// function foo() {
//     if (true) {
//       function bar() {
//         console.log("Hello");
//       }
//       bar(); //hello
//     }
//     bar(); //hello
//   }
//   foo();

//bai 6 : Ví dụ về hoisting với hàm trong một khối mã (let)
// function foo() {
//     if (true) {
//       let bar = function () {
//         console.log("Hello");
//       };
//       bar(); // hello (do let dc khai bao trong khoi lenh if cung cap)
//     }
//     bar(); // not defined
//   }
//   foo();

//bai 7 : Ví dụ về hoisting trong vòng lặp
// Dùng từ khóa var
// for (var i = 0; i < 5; i++) {
//     console.log(i); // 0 1 2 3 4
//   }
//   console.log("i =", i); // 5
  
  
//   // Dùng từ khóa let
//   for (let j = 0; j < 5; j++) {
//     console.log(j); // 0 1 2 3 4
//   }
//   console.log("j =", j); // j not defined

//bai 8 : Viết hàm tính toán MODEL

//bai 9 : Trích xuất các thuộc tính từ JSON
// const dataJson = `{
//     "name": "John",
//     "age": 30,
//     "email": "b5y2v@example.com",
//     "address": {
//       "street": "123 Main St",
//       "city": "Hue",
//       "country": "Vietnam"
//     }
// }`;

// const dataJS = JSON.parse(dataJson);

// console.log(dataJS.name);
// console.log(dataJS.age);
// console.log(dataJS.email);
// console.log(dataJS.address.street);
// console.log(dataJS.address.city);
// console.log(dataJS.address.country);

//bai10 : Xu ly mang doi tuong JSON
// const dataJson = `[
//     {
//         "name" : "Dinh Quang Phu",
//         "age" : 20,
//         "skill" : ["HTML","CSS","JS"]
//     },
//     {
//         "name" : "Dinh Quang Phuc",
//         "age" : 6,
//         "skill" : ["Python","Java","C++"]
//     },
//     {
//         "name" : "Le Van A",
//         "age" : 19,
//         "skill" : ["Python","C#","SQL"]
//     }
// ]`;

// const dataJS = JSON.parse(dataJson);
// const nameArray = dataJS.map(function (data) {
//     return data.name
// })
// console.log(nameArray);


//bai11 :Tinh Tong Gia Tri Don Hang
// const ordersJSON =`[
//     {
//         "id": 1,
//         "items": [
//         {
//             "productId": 1,
//             "quantity": 2
//         },
//         {
//             "productId": 2,
//             "quantity": 1
//         }]
//     },
//     {
//         "id": 2,
//         "items": [
//         {
//             "productId": 3,
//             "quantity": 3
//         }]
//     }
// ]`;

// const productsJSON = `[
//     {
//         "id": 1,
//         "name": "Iphone",
//         "price": 1200
//     },
//     {
//         "id": 2,
//         "name": "SamSung",
//         "price": 1000
//     },
//     {
//         "id": 3,
//         "name": "Xiaomi",
//         "price": 900
//     }
// ]`;

// const orders = JSON.parse(ordersJSON);
// const products = JSON.parse(productsJSON);

// function calculateTotal(id) {
//     let total = 0;
//     for(let i = 0; i < orders.length; i++) {
//         if(orders[i].id === id) {
//             for(let j = 0; j < orders[i].items.length; j++) {
//                 for(let k = 0; k < products.length; k++) {
//                     if(orders[i].items[j].productId === products[k].id) {
//                         total += orders[i].items[j].quantity * products[k].price;
//                     }
//                 }
//             }
//         }
//     }
//     return total;
// }

// //cach 2 :
// function calculateOrderTotal(orderId) {
//     const order = orders.find((item) => item.id === orderId);
//     if (order) {
//       let total = 0;
//       for (const item of order.items) {
//         const product = products.find((p) => p.id === item.productId);
//         if (product) {
//           total += product.price * item.quantity;
//         }
//       }
//       return total;
//     } else {
//       return "Không tìm thấy đơn hàng.";
//     }
//   }
  
// console.log(calculateTotal(2));
// console.log(calculateOrderTotal(2));
// console.log(calculateTotal(1));

//bai12 : Xoa San Pham tu JSON
// let productsJSON = `[
//     {
//         "id": 1,
//         "name": "Iphone12",
//         "price": 1200
//     },
//     {
//         "id": 2,
//         "name": "SamSung GaLaXy s21",
//         "price": 1000
//     },
//     {
//         "id": 3,
//         "name": "Xiaomi Redmi 9",
//         "price": 900
//     }
// ]`;

// const productsJS = JSON.parse(productsJSON); //chuyen json thanh js

// function deleteProduct(productId) {
//     const prroduct = productsJS.filter(item => item.id !== productId);
//     //console.log(prroduct);
//     productsJSON = JSON.stringify(prroduct); //chuyen js thanh JSON
//   }
  
//   deleteProduct(2);
//   console.log(productsJSON);

//bai 13 : Tinh tong so luong san pham tu JSON
// let productsJSON = `[
//         {
//             "id": 1,
//             "name": "Iphone12",
//             "quantity": 10
//         },
//         {
//             "id": 2,
//             "name": "SamSung GaLaXy s21",
//             "quantity": 5
//         },
//         {
//             "id": 3,
//             "name": "Xiaomi Redmi 9",
//             "quantity": 8
//         }
//     ]`;
  
// const productJS = JSON.parse(productsJSON);
// function countProducts() {
//     const total = productJS.reduce((total, item) => {
//         return total + item.quantity;
//     },0)
//     console.log(total);
// }

// countProducts();
  
  