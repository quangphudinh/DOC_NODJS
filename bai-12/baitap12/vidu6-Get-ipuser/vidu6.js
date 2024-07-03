const testAPI = "https://api.ipify.org?format=json";


fetch(testAPI)
  .then((response) => response.json())
  .then((data) => {
    const ipAddress = data.ip;
    const elementIpAddress = document.querySelector("#ipAddress");
    elementIpAddress.innerHTML = ipAddress;
  })
  .catch((error) => {
    console.error("Lỗi:", error);
  }); 


// const API = "https://api.ipify.org?format=json";


// fetch(API)
//   .then((response) => response.json())
//   .then((data) => {
//     const ipAddress = data.ip;
//     const elementIpAddress = document.querySelector("#ipAddress");
//     elementIpAddress.innerHTML = ipAddress;
//   })
//   .catch((error) => {
//     console.error("Lỗi:", error);
//   });
