//bai6
// function squareAreasDifferences(r) 
// {
//     var bigSquare = 4 * r * r;
//     var smallSquare = 2 * r * r;
//     return bigSquare - smallSquare; 
// };

// var test1 = squareAreasDifferences(5);
// console.log(test1);
// var test2 = squareAreasDifferences(6);
// console.log(test2);
// var test3 = squareAreasDifferences(7);
// console.log(test3);

//bai7
// function Palindrome(word)
// {
//     var temp = word;
//     temp = temp.split('').reverse().join(''); //reverse : dao nguoc mang
//     return temp === word;
// }
// var a = 'solos'
// console.log(Palindrome(a));

// //bai9
// var img = "<https://cdn.daca.vn/media/blog/lap-trinh";
// var title ="JS TIPS - Một số cách viết JS ngắn gọn hơn";
// var desc = "Hôm nay Daca.vn gửi tới các bạn một số những tips để giúp bạn code JS một cách hiệu quả...";
// var url = "<https://daca.vn/js-tips-mot-so-cach-viet-js-ngan-gon-hon>";

// var string = 
// `<div class = "article>
//     <a href = "${url}">
//         <div class = "inner-image">
//             <img src = "${img}" />
//         </div>
//         <div class = "inner-content">
//             <h2 class = "inner-title">${title}</h2>
//             <p class = "inner-desc">${desc}</p>
//         </div>
//     </a>
// </div>`

// console.log(string);

//bai 13

// console.log(5 > 4 ? 'True' : 'False');
// console.log(Math.round(99.5)); //lam tron len hoac xuong
// console.log(Math.ceil(99.2)); //lafm tron len
// console.log(Math.floor(99.9)); //lam tron xuong
// console.log(Math.min(10 ,20 , 100, -100 ,90)); // lay so nho nhat
// console.log(Math.max(10 ,20 , 100, -100 ,90)); //lam so lon nhat
// console.log(Math.pow(2,4)); // luy thua
// console.log(Math.random()); //tao so ngau nhien tu 0 den 1
// console.log(Math.trunc(99.5)); //xoa so thap phan

//bai 15 string methods

// var a = 'Daca.vn - Professional Web Design Services';
// console.log(a.indexOf('Web'));
// console.log(a.lastIndexOf('Design'));
// console.log(a.slice(10,22));
// console.log(a.split("",7));

//bai 18 : add and remove array
// const myFriends = ['Le Van An' , 'Le Van Binh' , 'Le Van Cao'];
// console.log(myFriends);
// myFriends.unshift('Le Van Nam' , 'Le Van Dung'); // them o dau mang
// console.log(myFriends);
// myFriends.push('Le Van Nam' , 'Le Van Dung'); // them vao cuoi mang
// console.log(myFriends);
// myFriends.shift(); // xoa o dau mang
// console.log(myFriends);
// myFriends.pop(); // xoa o cuoi mang
// console.log(myFriends);