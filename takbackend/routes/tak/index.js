const express = require("express");
const checkAuth = require('../../middleware/check-auth');
const router = express.Router();

const get = require('./get');
const post = require('./post');
const put = require('./put');
const del = require('./delete');

router.get('/', checkAuth, get.getUser);
router.get('/:id', checkAuth, get.getSpecificUser);
router.get('/:id/post', checkAuth, get.getUserPost);
router.post('/', checkAuth, wac,  post.createUser);
router.post('/videos', checkAuth, post.CreateUserPost);

module.exports = router;