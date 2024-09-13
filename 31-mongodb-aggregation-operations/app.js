const express = require("express");
const mongooseConnection = require("./config/mongoose");
const user = require("./models/user-model")
const post = require("./models/post-model")

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.send("Hello!")
})


app.get("/check", async function (req, res) {
    let findUser = await user.aggregate([

        // -------- $match ---------------->

        // {
        //    $match : {
        //      age : 20
        //    }
        // }

        // -------- $group ---------------->

        // {
        //    $group : {
        //     _id : "$age",
        //     userData : {
        //         $push : "$$ROOT" 
        //     }
        //    }
        // }

        // ------- $lookup --------------->

        // {
        //     $lookup : {
        //         from : "posts",          from which model you populate data 
        //         localField : "posts",    which field you filled in a given user
        //         foreignField : "_id",    "localField" ki _id apko "from" ki "_id" filed mai sa leni hai 
        //         as : "postData"          apko jo data receive hoga wo apko "as" wali value mai mila ga
        //     }
        // }

        // ----------$project -------------->

        // {
        //     $project : {       // it give those value which is set by one as following
        //         username : 1,                 // default show {username : "umar"}
        //         fullname : "$username"        // customize key {fullname : "umar"}
        //     }
        // }


        {
            $unwind : "$tags"
        }


    ])

    let findPost = await post.aggregate([
        {
            $lookup: {
                from: "users",
                localField: "createdBy",
                foreignField: "_id",
                as: "yourPost"
            }
        }
    ])

    res.send(findUser)

})


app.listen(3000);


