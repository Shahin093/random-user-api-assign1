const express = require("express");
const userController = require("../../controller/users.controller");
const limiter = require("../../middleware/limiter");

const router = express.Router();

router.route('/')
    .get(userController.getUsers)
    .post()


router
    .route('/all')
    .get(limiter, userController.getAllData)
router
    .route('/save')
    .post(userController.saveAUser);

router
    .route('/:id')
    .patch(userController.updateAUser);
module.exports = router;
