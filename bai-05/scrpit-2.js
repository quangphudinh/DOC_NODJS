//05. Một số hàm built-in
//alert("Hello World");

// var sesult = confirm("Bạn muốn đăng nhập?");
// console.log(sesult)

//prompt() : dùng để lấy dữ liệu thông tin từ người dùng
// var sesult = prompt("Nhập tên của bạn");
// console.log(sesult)

//console
//console.log("Hello World");
//console.error("Error");
//console.warn("Warning");

//setTimeout() : sử dụng hàm 1 lần duy nhất sau 1 thoi gian mong muon
// setTimeout(function(){
//     console.log("In thong bao sau 3s");
// }, 3000) 

//setInterval() : sử dụng hàm chạy lặp đi lặp lại sau thời gian mong muốn
// setInterval(function(){
//     console.log("Lap lai thong bao sau moi 3s");
// }, 3000)

// var myInterval = setInterval(function(){
//     console.log("Lap lai thong bao sau moi 1s");
// }, 1000)

// setTimeout(function(){
//     clearInterval(myInterval);
// }, 5000)

//typeof : tra ve kieu du lieu cua mot bien
//làm việc với String
//length : do dai cua 1 chuoi (tính cả khoảng trắng)
// var fullname = 'Dinh Quang Phu';
// console.log(fullname.length)

//indexOf() : trả về vị trí đâù tiên của 1 chuổi hoặc 1 ký tự trong 1 chuỗi
// cú pháp : string.indexOf(searchvalue, vị trí bắt đầu) duyệt từ trên xuống dưới
// var fullname = 'Dinh Quang Phu';
// console.log(fullname.indexOf('Phu '))

//lastIndexOf() : trả về vị trí cuối cùng của 1 chuỗi hoặc 1 ký tự trong 1 chuỗi
// cụ pháp : string.lastIndexOf(searchvalue, vị trí bắt đầu) và duyệt từ dưới lên trên
// console.log(fullname.lastIndexOf('Quang'))

//7.4
//slice() : cắt và copy 1 chuỗi mới mà k làm thay đổi chuổi gốc 
//cú pháp : string.slice(vi trí bắt đầu, vi trí bắt đầu)
// console.log('slice : ' + fullname.slice(0, 6))

//7.5
//replace() : thay đổi 1 chuỗi trong 1 chuỗi
//cú pháp : string.replace(searchvalue, replacevalue)
// console.log('replace : ' + fullname.replace('Dinh', 'Dinh Quang')) // thay the 1 chu dau tien thoi :))
// console.log('replace : ' + fullname.replace(/Quang/g, 'Phu')) 

//7.6
//toLowerCase() : chuyển chuỗi thanh chuỗi nhiều
//toUpperCase() : chuyển chuỗi thanh chuỗi nhiều

//7.7 trim() : xoa khoảng trắng 2 dau
// var a = '          asdfasdf              asdfasdf        ';
// console.log(a.trim())

//7.8
//charArt() : trả về 1 ky tự trong 1 chuỗi
// console.log(fullname.charAt(5))
// console.log(fullname.charAt(fullname.length - 1))

//7.9
//split() : chia 1 chuỗi thanh những chuỗi (bo trong arrray)
// console.log(fullname.split(' '))
// var b = "Dinh    Quang    Phu   ";
// b = b.replace(/^\s+|\s+$|\s+(?=\s)/g,"");
// console.log('b sau khi replace : ' +b)
// console.log(b.split(' '))
// console.log(fullname.split("")) // tach ra tung ky tu

//8.0 NUMBER
//8.1 isNaN() : kiểm tra 1 bien co phai la so khong hay khong
// var a =10;
// var b = 'Test';
// var result = a /b;
// console.log(result)
// console.log(typeof result)
// if(typeof result === 'number')
// {
//     console.log('Day La so' + result);
// }
// // console.log(isNaN(result))// tra ve True

// if(isNaN(result)){
//         console.log('So ngay Loi');
//     }
//     else{
//         console.log('So hop le');
//     }

//8.2 toString() : chuyen 1 so thanh 1 string
// var a = 10;
// console.log(a.toString())
// console.log(typeof a.toString())

//8.3 parseInt() : chuyen mot chuỗi thanh mot so nguyen
// var a = '10';
// console.log(a)
// console.log(typeof a)
// console.log(parseInt(a))

//8.3 toFixed() : lam trong chu so thap phan
//cu phap : toFixed(digits)
// var a = 10.123456789;
// console.log(a.toFixed(2))

//9.0 ARRAY
//9.1 toString() : chuyển 1 array thanh 1 chuỗi
// var list = ['Dinh', 'Quang', 'Phu'];
// console.log(list.toString())

// //9.2 join() : chuyển 1 array thanh 1 chuỗi , thêm dấu bất kỳ để ngăn cách giữa các thành phần
// //cu pháp : array.join(separator)
// console.log(list.join(' - '))

// //9.3 pop() : xoa phan tu cuoi mang - array.pop()
// console.log(list.pop()); // tra ve phan tu cuoi mang
// console.log(list)

// //9.4 push() : them phan tu với cuoi mang - array.push(item1,item2,...)
// list.push('Trung');
// console.log(list)

// //9.5 shift() : xoa phan tu đầu trong mang - array.shift()
// console.log(list.shift()) // tra ve phan tu đầu trong mang
// console.log(list)

// //9.6 unshift() : them phan tu với đầu trong mang - array.unshift(item1,item2,...)
// list.unshift('Hoa' , 'Anh');
// console.log(list)

// //9.7 splice() : thay đổi 1 phần trong 1 array (xóa hoặc chèn phần tử)
// //cu phap : array.splice(vị trí thêm xóa, số phần tử cần xóa, item1, item2, ...) 
// console.log(list.splice(2, 0, 'Khanh', 'Hoa'))
// console.log(list)
// //xoa
// console.log(list.splice(2, 1))
// console.log(list)
// //xoa va chen
// console.log(list.splice(2, 1, '133', '456'))
// console.log(list)

//9.8 concat() : noi 2 array với nhau
//cu phap : array.concat(array1, array2, ...)
// var array1 = [1, 2, 3];
// var array2 = [4, 5, 6];
// var array3 = array1.concat(array2);
// console.log(array1)
// console.log(array2)
// console.log(array3)

//9.9 slice() : cat 1 phần trong 1 array
//cu phap : array.slice(start, end)
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array2 = array1.slice(2, 5);
console.log(array1)
console.log(array2)