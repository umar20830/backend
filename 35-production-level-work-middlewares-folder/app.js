const express = require("express");
const indexRouter = require("./routes/index-route")

const app = express();


app.get("/", indexRouter );



app.listen(5000);