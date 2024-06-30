//bai1 : Lay URL hien tai cua trang
var currentURL =window.location.href;
console.log(currentURL);
//lay thon tin protocal
var currentProtocal = window.location.protocol;
console.log(currentProtocal);
//hostname
var currentHostname = window.location.hostname;
console.log(currentHostname);
//port
var currentPort = window.location.port;
console.log(currentPort);


//bai3 : chuyen huong trang web
function changeURL(time , url) {
    setTimeout(() => {
        window.location.href = url;
    }, time);
}
// changeURL(3000, 'https://www.facebook.com')

//bai4 : reload trang web
function reloadPage(delay) {
    setTimeout (() => {
        window.location.reload();
    },delay);
}
// reloadPage(3000)

//Bai5 : kiem tra HTTPS
var issue = window.location.protocol === 'https:';
console.log('An Toan : '+issue);

//bai 6 : mo cua so IN AN 
// window.print();

//bai 7 : Dem Nguoc
var seconds = 10;

function countDown(){
    if(seconds >= 0){
        console.log(seconds);
        seconds--;
        setTimeout(countDown, 1000);
    } else {
        console.log("Happy New Year");
    }
}
// countDown();

//bai 8 : kich thuoc cua so trinh duyet
console.log(window.innerHeight);
console.log(window.innerWidth)

//bai 9: vi tri cua so trinh duyet
console.log(window.screenX);
console.log(window.screenY);

//bai 10 : mo cua so popup
// window.open('https://www.google.com/?hl=vi', 
//     '_blank' , 
//     'width =1200 , height = 800 , top = 100 , left = 50');

//bai 11 : lay thong tin ve ten trinh duyet
console.log(navigator.userAgent)

//bai12 : ngon ngu trinh duyet
console.log(navigator.language);

//bai13 : Do phan giai man hinh
console.log(window.screen.width);
console.log(window.screen.height)

//bai14 :kiem tra thiet bi dang su dung la pc or mobile
const isMobile = navigator.userAgentData.mobile;
console.log(isMobile?'Điện thoại':'PC')

//bai 15 : Cac ngon ngu trinh duyet uu tien
console.log(navigator.languages);