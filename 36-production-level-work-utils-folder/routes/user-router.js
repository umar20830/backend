const express = require("express");
const {userController} = require("../controller/user-controller")
const userMiddleware = require("../middlewares/user-middleware")


const router = express.Router();



router.get("/", userMiddleware , userController )


module.exports = router;