const express = require("express");
const indexRouter = require("./routes/index-router")

const app = express();


app.use("/", indexRouter);




app.listen(process.env.PORT || 3000);


