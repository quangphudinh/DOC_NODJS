//cau 1 : kiem tra so nguyen duong

// function checkNumber(number) {
//     return number > 0 && number % 1 == 0 ;
// }
// var input = prompt('nhap vao mot so nguyen duong');
// input = parseFloat(input);

// if(isNaN(input)){
//     alert('vui long nhap so nguyen duong');
// }else{
//     var result = checkNumber(input);
//     if(result) alert('YES');
//     else alert('NO');
// }
// console.log(checkNumber(10))
// console.log(checkNumber(10.5))

//cau2
// const sum = (array) => {
//     const total = array.reduce((total,number) => total + number , 0); // tinh tong mang
//     return total;
// }

// const isShape = (n , angles) =>{
//     if(n < 3) return false;
//     if(angles.some((itm) => itm <= 0 || itm >= 180)) return false;
//     return sum(angles) === (n - 2)*180;
// }
// const tes1 = isShape(3,[60, 60, 60]);
// console.log(tes1)

//cau3 : viet tat cau - 
// const abbreviate = (string , n = 0) => {
//     return(
//         string
//         .split(' ')
//         .filter((word) => word.length >= n)
//         .map((word) => word[0].toUpperCase())
//         .join('')
//     );
// }

// const test1 = abbreviate("Xin chào! Tôi tên là Nam.");
// console.log(test1); // XCTTLN
// const test2 = abbreviate("Xin chào! Tôi tên là Nam.", 3);
// console.log(test2); // XCTTN --> Chữ "là" bị bỏ qua, vì có 2 ký tự, nhỏ hơn n = 3

//cau4 : viet hoa thuong xen ke
// const alternatingcaps = (string) => {
//     let count = 0;
//     let array =string.split('');
//     let newaray = array.map((item) => {
//         if(item == ' ') return item;
//         count++;
//         return count % 2 == 0 ? item.toUpperCase() : item.toLowerCase();
//     })
//     newaray = newaray.join('');
//     return newaray;
// }
// const test1 = alternatingcaps("Khá Bảnh");
// console.log(test1); // KhÁ bẢnH

//cau6 : banh sinh nhat
// const getCake = (name , age) => {
//     const char = age % 2 === 0 ? '#' : '*';
//     const middle = `${char} ${age} chuc mung sinh nhat ${name} ! ${age} ${char}`;
//     const edge = char.repeat(middle.length); // lap lai middle.length lan

//     return `${edge}\n${middle}\n${edge}`;
// }

// console.log(getCake('Nam', 3))

//cau 8 : Tinh Tong don hang
// const summ = (arr) => {
//     return arr.reduce((total,number) => total + number , 0);
// }

// const getTotalPrice = (arr) => {
//     const totalArray = arr.map((item) => item.quantity * item.price);
//     return summ(totalArray);
// }

// const test4 = getTotalPrice([
//     { product: "Sữa", quantity: 1, price: 7000 },
//     { product: "Trứng", quantity: 12, price: 3000 },
//     { product: "Bánh mỳ", quantity: 2, price: 15000 },
//     { product: "Phô mai", quantity: 1, price: 5000 },
//   ]);
//   console.log(test4); // 78000
  
//cau9: viet hoa chu cai dau cua moi tu
// const capitalize = (string) => {
//     return string.slice(0,1).toUpperCase() + string.slice(1);
// }

// const makeTitle = (string) => {
//     return string
//     .split(' ')
//     .map((word) => capitalize(word))
//     .join(' ');
// }
// const test1 = makeTitle("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó.");
// console.log(test1)

//cau 11 : Dem so luong so 1 trong mang 2D
// const countOnes = (arr) => {
//     const results = arr.reduce((total, row) => total + row.filter(cell => cell === 1).length,0);
//     return results;
// }
// const test2 = countOnes([
//     [1, 1, 1],
//     [0, 0, 1],
//     [1, 1, 1],
//   ]);
//   console.log(test2); // 7
  
//cau 13 : Inverted Number (Dao nguoc gia tri so)
// const invertNumber = (array) => {
//     const a = array.map((item) => -item)
//     return a
// }
// const test1 = [1 , -10 , -20 , 15 , 100 ,-30];
// console.log(invertNumber(test1))


// //cau14 : bo qua cac chu so
// const igN = (string) =>{
//     return string.split('').map((item) => isNaN(parseInt(item))? item : '').join('');
// }
// test1 = "aaaa12312asdfasdf1221312";
// console.log(igN(test1))
// console.log(test1)

//cau 16 : tim so trong string va nhan
// const numInStr = (string) => {
//     const newString = string.split('').map((item) => !isNaN(parseInt(item)) ? item : '').join('');
//     console.log(newString);
//     //return newString.split('').reduce((total, item) => total * item , 1);
//     return newString.split('').map((item) => Math.pow(parseInt(item),2)).join('');
// }

// const test1 = numInStr("JG23BGH5BA");
// console.log(test1)

//cau 17 : Tinh tong tien trong gio hang

// const cart = [
//     { id: 1, name: "Iphone", price: 1000 ,quantity : 5 },
//     { id: 2, name: "Ipad", price: 500 ,quantity : 2},
//     { id: 3, name: "Macbook", price: 2000 ,quantity : 1},
//   ];
  
//   const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   console.log(total);

// //cau 18 : nhóm các học sinh trong 1 lop theo giới tính
// const students = [
//     {hoten : 'Le Van A' , gioitinh : 'Nam'},
//     {hoten : 'Le Van B' , gioitinh : 'Nam'},
//     {hoten : 'Nguyen Thi C' , gioitinh : 'Nu'},
//     {hoten : 'Le Van D' , gioitinh : 'Nam'},
//     {hoten : 'Nguyen Thi E' , gioitinh : 'Nu'},
//     {hoten : 'Le Van F' , gioitinh : 'Nam'}
// ];
// const totalbyClasstudents = students.reduce((totalbyClass, student) => {
//     if(totalbyClass[student.gioitinh]){
//         totalbyClass[student.gioitinh].push(student.hoten);
//     }else{
//         totalbyClass[student.gioitinh] = [student.hoten];
//     }
//     return totalbyClass;
// },{});
// console.log(totalbyClasstudents)

//cau 20 : Tinh Tng diem theo tung lop
// const students = [
//     {hoten : 'Le Van A' , lop : 'A' ,diem : 7.5},
//     {hoten : 'Le Van B' , lop : 'B' ,diem : 6.8},
//     {hoten : 'Nguyen Thi C' , lop : 'A' ,diem : 8},
//     {hoten : 'Le Van D' , lop : 'C' ,diem : 9},
//     {hoten : 'Nguyen Thi E' , lop : 'B' ,diem : 8.5},
//     {hoten : 'Le Van F' , lop : 'B' ,diem : 7.2}
// ];

// const sumByClass = students.reduce((totalbyClass, student) => {
//     const lop = student.lop;
//     if(!totalbyClass[lop]){
//         totalbyClass[lop] = 0;
//     }
//     totalbyClass[lop] += student.diem;
//     return totalbyClass;
// },{});
// console.log(sumByClass)