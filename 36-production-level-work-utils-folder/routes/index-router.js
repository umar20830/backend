const express = require("express");
const {indexController} = require("../controller/index-controller")
const indexMiddleware = require("../middlewares/index-middleware")

const router = express.Router();



router.get("/", indexMiddleware ,indexController);



module.exports = router;