const express = require('express');
const homeController = require('../controllers/home');
const categoryController = require('../controllers/category');
const router = express.Router();

router.get('/', homeController.index);
router.get('/category/:slug', categoryController.show);

module.exports = router;