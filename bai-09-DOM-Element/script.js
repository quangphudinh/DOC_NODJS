//DOM
//1.2 Nhiem vu cua DOM js :
    // - lay thong tin ra HTML
    // - thay doi thuoc tinh HTML
    // - thay doi css cua HTML
    // - tao them xoa thong tin HTML

//1.3 cac loai DOM
// - DOM document : chua toan bo noi dung cua trang web
// - DOM element : 1 the HTML
// - DOM HTML : thay doi noi dung va thuoc tinh the HTML
// - DOM CSS : thay doi css the HTML
// - DOM Event : gan cac su kien vao the HTML
// - DOM Listener : de lắng nghe các sự kiện tác động vao the HTML
// - DOM Navigation : thể hiện mối quan hệ cha con của các thẻ
// - DOM nodes : để thao tác  với HTML thông qua đối tượng (Object)

//2. DOM ELEMENTs
//2.1 :  get ElementById : lay ra 1 phan tu theo id
// const h2_01 = document.getElementById("h2-01");
// console.log(h2_01);
//2.2 : getElementsByTagName : lay ra nhieu phan tu theo ten the va tra ve 1 array
// var element = document.getElementsByTagName("h2");
// console.log(element);
// for (const h2 of element) {
//     console.log(h2);  
// }

//2.3 : getElementsByClassName : lay ra nhieu phan tu theo ten class va tra ve 1 array
// var element = document.getElementsByClassName("title");
// console.log(element);
// for (const title of element) {
//     console.log(title);  
// }

//2.4 : querySelector : lay ra 1 the theo 1 selector va tra ve 1 phan tu
// const title = document.querySelector(".title");
// console.log(title);

// const tagA = document.querySelector("#menu li a");
// console.log(tagA);

//2.5 : querySelectorAll : lay ra nhieu the theo 1 selector va tra ve 1 array
// const ListtagA = document.querySelectorAll("#menu li a");
// console.log(ListtagA);

// lay ra cac the a theo cach thong thuong
// const listTagA = document.getElementsByTagName("a");
// console.log(listTagA);


//3. DOM HTML
//3.1 : innerHTML : lay ra tat ca noi dung trong the HTML (bao gom ca the HTML, the HTML con, the HTML con con,...)
// console.log(h2_01.innerHTML);
// const innerHTML_h201 = document.getElementById("h2-01").innerHTML;
// console.log(innerHTML_h201);
// //thay doi noi dung:
// document.querySelector("#h2-01").innerHTML = "Hello World";


//3.2 : innerText : chi lay ra noi dung (text) cua the HTML
// const innerText_h201 = document.getElementById("h2-01").innerText;
// console.log(innerText_h201);

//3.3 getAttribute : lay ra thuoc tinh cua the HTML
// const h2_03 = document.querySelector("#h2-03");
// const classh2_03 = h2_03.getAttribute("class");
// const dataIdh2_03 = h2_03.getAttribute("data_id");
// console.log(h2_03);
// console.log(classh2_03);
// console.log(dataIdh2_03);

// //thay doi gia tri thuoc tinh them vao va thay the gia tri cu : setAttribute
// const h2_01 = document.querySelector("#h2-01");
// h2_01.setAttribute("class","test2");

//hien thi quang cao sau 5 giay vao trang
setTimeout(() =>{
    const ads1 = document.querySelector("#ads-1");
    ads1.setAttribute("class" , "ads ads-display");
    //ads1.classList.add("ads-display"); : them class vafo ma k xoa class cu
    //ads1.classList.remove("ads-display");
},5000)