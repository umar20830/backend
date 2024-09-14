const express = require("express");
const {indexController} = require("../controllers/index-controller");
const indexMiddlerware = require("../middlewares/index-middleware")

const router = express.Router();


router.get("/",indexMiddlerware,indexController);


module.exports = router;