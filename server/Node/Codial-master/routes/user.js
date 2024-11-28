const express = require("express");
const Router = express.Router();
const userController = require('../contrtoller/userController');

Router.get('/user_signup', userController.user_signup);
Router.get('/signin',userController.Login);
Router.post('/create', userController.create);


module.exports = Router;
