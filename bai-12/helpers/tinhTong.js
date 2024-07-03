export const tinhTong = (a, b ,callback) => {
    console.log(a + b);
    const tong = a + b; 
    // console.log(kiemTraSoChan(tong)); // kiemTraSoDuong(tong);
    // console.log(kiemTraSoDuong(tong));
    console.log(callback(tong));
}