const express = require('express');
const router = express.Router();

const controller = require('../../controllers/client/products.controller');

//trang chinh cua san pham
router.get('/products',controller.index)

//con nhieu trang nua nhu : tao them sua xoa san pham

module.exports = router;