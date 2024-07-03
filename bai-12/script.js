import { kiemTraSoDuong} from "./helpers/kiemTraSoDuong.js";
import { kiemTraSoChan} from "./helpers/kiemTraSoChan.js";
import { tinhTong} from "./helpers/tinhTong.js";
//1. Callback
//vidu 1
// const congViec1 = () => {
//     console.log('congViec1');
// }

// const congViec2 = (callback) => {
//     console.log('congViec2');
//     callback();
// }

// congViec2(congViec1);

//vidu 2
// const kiemTraSoDuong = (number) => {
//     return number > 0 ? "La so duong" : "La so am";
// }
// const kiemTraSoChan = (number) => {
//     return number % 2 === 0 ? "La so chan" : "La so le";
// }
// const tinhTong = (a, b ,callback) => {
//     console.log(a + b);
//     const tong = a + b; 
//     // console.log(kiemTraSoChan(tong)); // kiemTraSoDuong(tong);
//     // console.log(kiemTraSoDuong(tong));
//     console.log(callback(tong));
//}
//cach1
// tinhTong(5, 10 , kiemTraSoDuong);
// tinhTong(5, 10 , kiemTraSoChan);

//cach 2 : dung model
// tinhTong(5, 10 , (number) => {
//     console.log(kiemTraSoChan(number));
//     console.log(kiemTraSoDuong(number));
// });

//vidu3:
// const loginSuscess = () => {
//     console.log('Login thanh congggggggggggggggggggggg');
// }
// const checkLogin = (data ,callback) => {
//     const email = 'ZyqFP@example.com';
//     const password = '123456';

//     if(data.email === email && data.password === password){
//         callback();
//     }else{
//         console.log('login that bai');
//     }
// }

// let data = {
//     email: 'ZyqFP@example.com',
//     password: '123456',
// };
// checkLogin(data , loginSuscess);

//02.PROMISE : gỉai quyết vấn đề callback hell (nhiều hàm lồng nhau gây khó chịu)
//  var a = 10;

//  var promise = new Promise((resolve, reject) => {
//     if(a === undefined){
//         reject();
//     }
//     else {
//         //resolve();
//         resolve(a);
//     }
//  });

//  promise
//  .then((a) => {
//     console.log(a);
//     return a;
//  })
//  .then((a) => {
//     const b = a + 10;
//     console.log(b);
//     return b;
//  })
//  .then((b) => {
//     const c = b + 10;
//     console.log(c);
//     return c;
//  })

//  .catch(() => {
//     console.log('that bai');
//  })
//  .finally(() => {
//     console.log('ket thuc');
//  });

//2.2 : Trang Thai
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('thanh cong');
//         //reject('that bai');
//     },3000)
// });

// setTimeout(() => {
//     console.log("Sau 1 giay : " , promise);
// },1000)
// setTimeout(() => {
//     console.log("Sau 2 giay : " , promise);
// },2000)
// setTimeout(() => {
//     console.log("Sau 3 giay : " , promise);
// },3000)

//3 : Fetch API
//Fetch : dùng để gọi lên server thông qua API để bắt dữ liệu trên server trả về
//API : là 1 url để frontend giao tiếp với backend

fetch("https://dummyjson.com/products")
.then(res => res.json()) // nhận và chuyển chuỗi json thành js
.then(data => {
     console.log(data);
    //  console.log(data.products);

    const newArray = data.products.map((item) => {
        // return `
        // <li>${item.title}</li>
        // `;

        return `
        <div class = "product-item">
            <img src="${item.thumbnail}">
            <h2>${item.title}</h2>
            <h3>${item.price}</h3>
        </div>
        `
    })
    //console.log(newArray);

    const htmls = newArray.join('');
    //console.log(htmls);

    // const productList =document.querySelector("#product-list");
    // productList.innerHTML = htmls;

    const productLis =document.getElementById("product-list");
    productLis.innerHTML = htmls;
})