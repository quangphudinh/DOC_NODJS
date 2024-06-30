//Cau1: An Thong Bao sau 1 khoan thoi gian
var notification = document.getElementById('notification');
function showNotification(){
    setTimeout(() =>{
        notification.style.display = 'none';
    },4000);
}
// showNotification();

//cau2: Lam mo thong bao sau 1 khoan thoi gian
function fadeOut(){
    var opacity = 1; //thuoc tinh thay doi su trong suot trong css
    var timer = setInterval(()=>{
        if(opacity <= 0){
            clearInterval(timer); //dung khoang thoi gian lap lai
            notification.style.display = 'none';
        }
        notification.style.opacity = opacity;
        opacity -= 0.1;
        }, 1000);
}
setTimeout(fadeOut, 4000);

//cau3 :Thay doi noi dung phan tu
// var element = document.getElementById('element');
// element.innerHTML = 'Noi dung moi';

//cau4 : Thay doi mau css cua phan tu
var elementColor = document.getElementsByClassName('title'); //lay ra nhieu phan tu
for (let i = 0; i < elementColor.length; i++) {
    elementColor[i].style.color = "blue";
  }
  
//cau5 :Thay doi mau nen sau 1 khoang thoi gian
setTimeout(() => {
   document.getElementsByTagName("body")[0].style.backgroundColor = "#FECF73"; 
}, 3000);

//cau6 : thay doi nut bam
const button = document.getElementById("btn");
setTimeout(() => {
    button.style.width = '200px';
    button.style.height = '100px';
    button.style.backgroundColor = 'green';
},5000)