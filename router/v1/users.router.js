const express = require("express");
const userController = require("../../controller/users.controller");

const router = express.Router();

router.route('/')
    .get(userController.getUsers)
    // .get(userController.getAllData)
    .post()


router
    .route('/all')
    .get(userController.getAllData)

module.exports = router;
