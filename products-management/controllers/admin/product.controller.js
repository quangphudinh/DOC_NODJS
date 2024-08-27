const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");

// [GET] /admin/products
module.exports.index = async (req, res) => {
    //Đoạn bộ lọc
    const filterStatus = filterStatusHelper(req.query);
    // console.log(filterStatus);

    let find = {
        deleted : false
    }

    // xử lý sự kiện khi kích vào nút hoạt động / dừng hoạt động để loc ra những sản phẩm đang hoạt động / dừng hoạt động
    if(req.query.status){
        find.status = req.query.status
    }

    //phần tìm kiếm
    const objectSearch = searchHelper(req.query);
   
    if(req.query.keyword){ 
        find.title = objectSearch.regex
    }

    //phần phân trang - pagination
    const countProducts = await Product.countDocuments(find);
    let objectPagination = paginationHelper({
        limitItem : 4,
        currentPage : 1
    } , req.query , countProducts )

    // emd phần phân trang - pagination

    const products = await Product.find(find).limit(objectPagination.limitItem).skip(objectPagination.skip);
    res.render("admin/pages/products/index.pug", {
        titlePage : "Trang SP",
        products : products,
        filterStatus : filterStatus,
        keyword : objectSearch.keyword,
        pagination : objectPagination
    })
}

// [PATCH] /admin/products/change-status/:status/:id
module.exports.changeStatus = async (req, res) => {
    const status = req.params.status;
    const id = req.params.id;

    await Product.updateOne({_id : id} , {status : status})

    res.redirect("back")
}

// [PATCH] /admin/products/change-status/:status/:id
module.exports.changeMulti = async (req, res) => {
    const type = req.body.type;
    const ids = req.body.ids.split(",");

    switch(type){
        case "active": 
            await Product.updateMany({_id : {$in : ids}} , {status : "active"})
            break;
        case "unactive":
            await Product.updateMany({_id : {$in : ids}} , {status : "unactive"})
            break;
        default:
            break;
    }
    res.redirect("back")
}

// [DELETE] /admin/products/delete/:id
module.exports.deleteItem = async (req, res) => {
    const id = req.params.id;
    // phương thức xóa chỉ thay đổi thuộc tính "deleted" trong csdl
    await Product.updateOne({_id : id} , {
        deleted : true,
        deletedAt : new Date()
    })
    // phương thức xóa Item này trong csdl luôn (xóa cứng)
    // await Product.deleteOne({_id : id})
    res.redirect("back")
}