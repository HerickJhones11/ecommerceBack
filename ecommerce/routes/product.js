const express = require('express')
const router = express.Router()

const { create, productById, read } = require("../controllers/product")
    
    
const { remove, update, list, listRelated, listCategories, listBySearch, photo, listSearch } = require("../controllers/product");
const { requireSigin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");


router.get('/product/:productId', read)
router.post("/product/create/:userId", requireSigin,  isAuth, isAdmin, create);
router.delete('/product/:productId/:userId',requireSigin, isAuth, isAdmin , remove);
router.put('/product/:productId/:userId',requireSigin, isAuth, isAdmin , update);
router.get('/products',list)
router.get('/products/search', listSearch)
router.get('/products/related/:productId', listRelated)
router.get('/products/categories',listCategories)
router.post('/products/by/search', listBySearch)
router.get('/product/photo/:productId', photo)


router.param('userId', userById)
router.param('productId', productById)




module.exports = router;