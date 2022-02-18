const express = require('express');

const router = express.Router();

const  getUser = async (req, res, next) => {

    try {
        console.log("User");
    }
    catch (e) {
      next(e);
    }
}


const  getSpecificUser = async (req, res, next) => {

    try {
        console.log("User");
    }
    catch (e) {
      next(e);
    }
}




module.exports = {
    getUser
}


module.exports = {
    getUser,
    getSpecificUser
}