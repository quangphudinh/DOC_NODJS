//BAÌ TẬP JAVASCRIPT CƠ BẢN -TIẾT 2
//Cau 1 : Max Mumber
function maxMumber(a, b) {
    return a > b ? a : b
}
console.log(maxMumber(5, 10))

//cau 3 : Toc do gio han
function maxSpeed(x) {
    if (x < 70) 
        console.log('Duoi 70 km/h - AN TOAN');
    else {
        var tienphat = 0;
        var y = x - 70;
        while(y >= 5){
            tienphat += 30000;
            y -= 5;
        }
        console.log('Tien phat : ' + tienphat);
        console.log('Ban bi tuoc giay phep lai xe');
    }
}

maxSpeed(77);

//cau 4: In ra key value cua object - in ra key co kieu du lieu la string
// const person = {
//     name: 'Dinh Quang Phu',
//     age: 22,
//     heigh : 175,
//     country : 'VietNam',
//     designation : 'UI Developer'
// };

// const technology = {
//     name: 'Javascript',
//     version : 6,
//     heigh : 175,
//     purpose: "Scripting language for Web",
//     developer: "Netscape Corporation",
// };

// function printObject(obj) {
//     for (var key in obj) {
//         if(typeof obj[key] === 'string')
//             console.log(key + ': ' + obj[key]);
//     }
// }

// printObject(person);
// printObject(technology);

//cau5 - so nguyen to
// function isPrimeNumber(number){
//     for(let a = 2 ; a < number ; a++){
//         if(number % a === 0){
//             return false;
//         }
//     }
//     return true;
// }

// function showPrimeNumber(numberLimit){
//     for(let i = 2 ; i < numberLimit ; i++){
//         if(isPrimeNumber(i)){
//             console.log(i);
//         }
//     }
// }

// showPrimeNumber(20)

//cau 7 : kiem tra nam nhuan
// function checkLeapYear(year) {
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkLeapYear(2016));
// console.log(checkLeapYear(2000));

//cau 8 : lay duoi mo rong cua 1 file : vd : index.html --> html
// function getFileExtension(fileName) {
//     return fileName.includes('.') ? fileName.split('.').pop() : 'Not found';
// }

// console.log(getFileExtension('index.html'))


//cau 11 : toan tu 3 ngoi
// const fullName = 'Dinh Quang Phu';
// const gender = 'Nam';
// const age = 17;

// const vocation = gender === 'Nam' ? 'Ong' : 'Ba'
// console.log(vocation)
// console.log(`Xin chào ${gender === "Nam" ? "Ông" : "Bà"} ${fullName}`);
// console.log(`Xin chào ${vocation} ${fullName}`);

//cau 12 : Lay ra ten
// const myFriends = [4,'Le Van An' , 'Le Van Binh', 3 , 'Le Van Cao' , 1 , 2] ;
// for(let temp in myFriends)
//     {
//         if( typeof myFriends[temp] === 'string')
//             console.log(myFriends[temp]);
//     }