const express = require('express');

const router = express.Router();

const  createUser = async (req, res, next) => {

    try {
        console.log("User");
    }
    catch (e) {
      next(e);
    }
}

const  CreateUserPost = async (req, res, next) => {

    try {
        console.log("User");
    }
    catch (e) {
      next(e);
    }
}

module.exports = {
    createUser,
    CreateUserPost
}
