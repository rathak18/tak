const express = require("express");
const router = express.Router();

const get = require('./get');
const post = require('./post');
const put = require('./put');
const del = require('./delete');

router.get('/',  get.getUser);
// router.get('/:id',  get.getSpecificUser);
// router.get('/:id/post',get.getUserPost);
// router.post('/', post.createUser);
// router.post('/videos',post.CreateUserPost);

module.exports = router;