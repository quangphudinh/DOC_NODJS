//ví dụ 2 : biểu thức = 1/n + ...+ n/n
// const bieuthuc = (n) =>{
//     let result = 0;
//     for(let i = 1; i <= n; i++){
//         result += i / n;
//     }
//     return result;
// }

// let n;
// do{
//     n = parseInt(prompt('nhap n : '));
//     if(n<=0)
//         {
//             console.log('Vui long nhap so lon hon 0');
//         }
//     else{
//         const result = bieuthuc(n);
//         console.log(result);
//     }
// }while(n<=0)

// //02.Try Catch : bắt lỗi chương trình - sử dụng khi muốn chương trình k bị dừng khi một lệnh nào đó lỗi
// const b = 10;

// try {
//     console.log("a = " + a);
// } catch (error) {
//     console.log(error);
// }finally{
//     console.log('Luon chay vao day');
// }
// console.log("Day la code cua chuong trinh khac")

//03. Lam viec voi Object
// var inforUser = {
//     name : 'Tao Ten la Tao',
//     phone : '123123123'
// }
// console.log(inforUser)
// inforUser.Email = 'test@123123gmail.com'; // them 1 key
// inforUser['address'] = 'Ha Noi' // them 1 key co ten khac
// console.log(inforUser)
// delete inforUser['address'] // xoa 1 key
// console.log(inforUser)

//04. Lam viec voi Array
//4.1 forEach() : lap qua 1 mang
//cu phap : array.forEach(function(giá trị , vị trí trong mảng , mảng hiện tại){});
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
// array.forEach((item) => {
//         sum += item;
//     });
// console.log(array);
// array.forEach((item , index) => {
//    // array.index = item + 2;
//     array[index] = item + 2;
// })
// console.log(array)

//4.2 every() :kiểm tra tất cả phẩn tử trong 1 mảng phải thõa mãn điều kiện nào đó - return True or False
//cu phap : array.every(function(giá trị , vị trí trong mảng , mảng hiện tại){});
// array.every((item) => {
//     return item > 0;
// })
// console.log(array)

const monHoc = [
    {ten : "Toan", diem : 8},
    {ten : "Ly", diem : 7},
    {ten : "Hoa", diem : 9},
    {ten : "Sinh", diem : 6}
]

// const hocSinhGioi = monHoc.every((item) => {
//     return item.diem >= 8;
// })
// console.log(hocSinhGioi)

// const hocSinhKha = monHoc.every((item) => {
//     return item.diem >= 6;
// })
// console.log(hocSinhKha)

//4.3 some() : kiểm tra 1 phần tử trong 1 mảng k thoax man hiện nào đó - return True or False
//cu phap : array.some(function(giá trị , vị trí trong mảng , mảng hiện tại){});
    // const olaiLop = monHoc.some((item) => {
    //     return item.diem < 5;
    // });
    // if(olaiLop===true){
    //     console.log('Hoc sinh o lai lop')
    // }else{
    //     console.log('Hoc sinh hoc rat tot')
    // }

//4.4 find() : tim kiem 1 phần tử trong 1 mảng - return 1 phần tử , k thi tra ve undefined
//cu phap : array.find(function(giá trị , vị trí trong mảng , mảng hiện tại){});
    // const findToan = monHoc.find((item) => {
    //     return item.ten === "Toan";
    // });
    // console.log(findToan)

//4.5 filter() : tim kiem nhieu phan tu trong mang
//cu phap : array.filter(function(giá trị , vị trí trong mảng , mảng hiện tại){});
    // const hocSinhTB = monHoc.filter((item) => {
    //     return item.diem < 9;
    // });
    // console.log(hocSinhTB)

//4.6 map() : lặp qua từng phần tử của mảng và trả về một mảng mới - số lượng bằng mảng cũ - giá trị trả về được quyết định bởi từ kháo return
//cú pháp : array.map(function(giá trị , vị trí trong mảng , mảng hiện tại){});
    // const exMap = monHoc.map((item) => {
    //     return item.diem * 2;
    // })
    // console.log(exMap) 

    //---so sanh forEach va map------
    // console.log(monHoc);
    // const tes1 = monHoc.forEach((item) => {
    //     return item.ten;
    // });

    // console.log(tes1);
    // const tes2 = monHoc.map((item) => {
    //     return item.ten;
    // });
    // console.log(tes2)

//4.7 reduce() : duyệt qua từng phần tử trong mảng để tính toán và trả về một giá trị cuối cùng
//cu phap : array.reduce(function(giá trị của lệnh return sau mỗi vòng lặp ,giá trị ,
// vị trí trong mảng , mảng hiện tại){}, giá trị khởi tạo ban đầu (không bắt buộc));

// const number = [1,2,3,4]

// const tong = number.reduce((total,item) => {
//     console.log(total);
//     console.log(item);
//     return total + item // giay gia tri nay gan vao total - item se la gia tri cua phan tu tiep theo
//   },0); // giá trị khởi tạo ban đầu gán cho total
// console.log(tong)

// let tongdiem = 0;
// monHoc.forEach((item) => {
//     tongdiem+=item.diem;
// })
// console.log(tongdiem)

// let TongDiem = monHoc.reduce((total,item) => {
//     return total + item.diem
// },0)
// console.log(TongDiem)

// let diemTrungBinh = monHoc.reduce((average , item) => {
//     return average + item.diem/monHoc.length
// },0)
// console.log(diemTrungBinh)