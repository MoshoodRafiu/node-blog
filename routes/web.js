const express = require('express');
const homeController = require('../controllers/home');
const categoryController = require('../controllers/category');
const postController = require('../controllers/post');
const router = express.Router();

router.get('/', homeController.index);
router.get('/about', homeController.about);
router.get('/contact', homeController.contact);
router.get('/search', homeController.search);
router.get('/post/:slug', postController.show);
router.get('/category/:slug', categoryController.show);

module.exports = router;