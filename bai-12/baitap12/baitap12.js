//cau1 : In ra tung phan tu trong mang

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = ["Lê Văn A", "Nguyễn Thị B", "Đỗ Thị C"];

// function forEachTest(array , callback){
//     array.forEach(element => {
//         callback(element);
//     });
// }

// function consoleLog(element){
//     console.log(element);
// }
// forEachTest(arr , consoleLog)
// forEachTest(arr2 , consoleLog)


//cau2 : Cong tung cap phan tu lien tiep cua mang
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function consoleLog(element){
//     console.log(element);
// }
// function forEachPair(array , callback){
//     array.forEach((element , index) => {
//         {
//             callback(element + index);
//         }
//     })
// }
// forEachPair(arr, consoleLog)

//cau3 : Tra ve 1 so ngau nhien tu 1 den 10
// function getRandomNumber()
// {
//     return new Promise((resolve , reject) => {
//         //const  randomNumber = Math.floor(Math.random() * 10) + 1;
//         const randomNumber = undefined;

//         if(randomNumber){
//             resolve(randomNumber);
//         }else{
//             reject("Khong the tao so ngau nhien");
//         }
//     });
// }

// getRandomNumber()
// .then((number) => {
//     console.log("So ngau nhien : " ,number);
// })
// .catch((error) => {
//     console.error("Loi roi nha",error);
// })

//cau4 : Lay danh sach cac so chan
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = [1,3,5]

// function getEvenNumber(array){
//     return new Promise((resolve , reject) => {
//         var result = array.filter((element) => element % 2 == 0);
//         if(result.length > 0){
//             resolve(result);
//         }else{
//             reject("Khong co so chan");
//         }
//     });  
// }

// getEvenNumber(arr2)
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.error("Loi",error);
// })

//cau5 : Lay data thong qua API va in ra man hinh
