const express = require("express");
const indexRouter = require("./routes/index-router")
const userRouter = require("./routes/user-router")

const app = express();


app.use("/" , indexRouter);
app.use("/user", userRouter );



app.listen(5000);

