// 2.1
// console.log(window);
// 2.2
// console.log(window.innerHeight);
// console .log(window.innerWidth);

//2.3 windown.open(url , name , option) ; option : heigjt , width , top , left
// var tab;
// const openTab = () => {
//    tab =  window.open('https://translate.google.com/?hl=vi&sl=auto&tl=vi&op=translate', '_blank' , 'width =1200 , height = 800 , top = 100 , left = 50');
// }

// //2.4 windown.close()
// const closeTab = () => {
//     tab.close();
// };

//3 . BOM Screen : lay ra kich thuoc man hinh may tinh
// console.log(screen.width)
// console.log(screen.height)

//4.1
// console.log(location) //lay ra cac thong tin url
//4.2 load lai trang
// const reloadPage = () => location.reload()
// setInterval(reloadPage, 3000) //load lai trang sau 3s

//4.3 : cac thuoc tinh
// hash : lay phan sau dau # cua URL
// host : lay ra hostname va port cua URL
// hostname : lay ra ten cua host (k lay port)
// href : lay ra toan bo URL
// origin : tra ve protocal , hostname , port cua URL
// pathname : lay ra phan sau (path name) cua URL
// port : lay ra port cua URL
// search : lay ra querystring phan sau ? cua URL
//vdu : http://127.0.0.1:5500/bai-08/index.html?search=test123#abc

//5 BOM history
//5.1 history
// console.log(history);
//history.back();
//history.forward();
//history.go(-1); : đi lùi n trang
//history.go(1); : đi tới n trang

// const backPage = () => {
//     history.back();
// }

//6. Navigator : lấy thông tin liên quan đến trình duyệt người dùng
//navigator.cookieEnabled; kiem tra trinh duyet co bat cookie hay khong
//navigator.language; lay ra ngon ngu hien tai
//navigator.appName; lay ra ten cua trinh duyet
//navigator.appCodeName; lay ra ten ma code cua trinh duyet
//navigator.appVersion; lay ra phien ban cua trinh duyet
//navigator.platform; lay ra thiet bi cua may (he dieu hanh)
// console.log(navigator)

//7.BOM popup
//alert("Hello World");
//confirm("Bạn muốn đăng nhập?");
//prompt("Nhập tên của bạn");

//8. BOM Timing
//setTimeout(function, miliseconds) : sử dụng hàm 1 lần duy nhất sau 1 thoi gian mong muon
//setInterval(function, miliseconds) : sử dụng hàm chạy lặp đi lặp lại sau thời gian mong muon

//9. Cookies : là dữ liệu lưu trữ trong 1 file (nằm trong máy tính)
// được lưu trữ ở dạng name = value
//tao 1 cookie : document.cookie = 'name = value';
//ham setCookie
function setCookie(cname , cvalue , exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// const fullname = prompt("Nhập họ tên của bạn");
// console.log(fullname);
// setCookie('fullname' , fullname , 3);

// document.cookie = `fullname=${fullname}; expires=Thu, 01 Jan 2025 00:00:00 GMT; path=/`;

 // Lay gia tri cookies
//  const cookie = document.cookie;
//  console.log(cookie);

//  function getCookie(cname)
//  {
//      var name = cname + "=";
//      var decodedCookie = decodeURIComponent(document.cookie);
//      var ca = decodedCookie.split(';');
//      for(var i = 0; i <ca.length; i++) 
//      {
//          var c = ca[i];
//          while (c.charAt(0) == ' ') 
//          {
//              c = c.substring(1);
//          }
//          if (c.indexOf(name) == 0) 
//          {
//              return c.substring(name.length, c.length);
//          }
//      }
//      return "";
//  }

//  console.log(getCookie('fullname'));

//Đổi cookies : document.cookie = 'name = value' : đổi value thành value khác thôi

//9.2 Xóa cookies: xét lại ngày hết hạn của expries về những thời gian trước đây
// function deleteCookie(cname)
// {
//     document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
// }
// deleteCookie('fullname');
