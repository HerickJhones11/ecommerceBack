const express = require('express')
const router = express.Router()

const { create, categoryById, read, update, remove, list , dropCollection } = require("../controllers/category");
const { requireSigin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");


router.get('/category/:categoryId', read)
router.post("/category/create/:userId", requireSigin, isAdmin, isAuth, create);
router.put("/category/:categoryId/:userId", requireSigin, isAdmin, isAuth, update);
router.delete("/category/:categoryId/:userId", requireSigin, isAdmin, isAuth, remove);
router.get('/categories', list)




router.param('categoryId', categoryById)
router.param('userId', userById);



module.exports = router;