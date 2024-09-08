const express = require("express");
const mongooseConnection = require("./config/mongoose")
const userSchema = require("./models/userSchema")

const app = express();


app.get("/", function (req, res) {
    res.send("Hello World!")
})

app.get("/user", async function (req, res) {

    const users = await userSchema.insertMany([
        { username: "alice", age: 28, isMarried: true, isAdmin: false },
        { username: "bob", age: 35, isMarried: false, isAdmin: true },
        { username: "carol", age: 22, isMarried: true, isAdmin: false },
        { username: "dave", age: 40, isMarried: false, isAdmin: false },
        { username: "eve", age: 30, isMarried: true, isAdmin: true },
        { username: "frank", age: 27, isMarried: false, isAdmin: true },
        { username: "grace", age: 33, isMarried: true, isAdmin: false },
        { username: "hank", age: 24, isMarried: false, isAdmin: true },
        { username: "iris", age: 31, isMarried: true, isAdmin: false },
        { username: "jack", age: 29, isMarried: false, isAdmin: true },
        { username: "karen", age: 26, isMarried: true, isAdmin: false },
        { username: "leo", age: 34, isMarried: false, isAdmin: true },
        { username: "mona", age: 32, isMarried: true, isAdmin: false },
        { username: "nina", age: 25, isMarried: false, isAdmin: true },
        { username: "oliver", age: 36, isMarried: true, isAdmin: false },
        { username: "paula", age: 38, isMarried: false, isAdmin: true },
        { username: "quinn", age: 23, isMarried: true, isAdmin: false },
        { username: "ryan", age: 41, isMarried: false, isAdmin: true },
        { username: "sara", age: 28, isMarried: true, isAdmin: false },
        { username: "tom", age: 37, isMarried: false, isAdmin: true },
        { username: "uma", age: 26, isMarried: true, isAdmin: false }
    ])

    res.send(users)

})

app.get("/find", async function (req, res) {

    // 1. equal to -> $eq

    // const user = await userSchema.find({age:{$eq:28}});


    // 2. not-equal to -> $ne

    // const user = await userSchema.find({age:{$ne:28}});


    // 3. less than -> $lt

    // const user = await userSchema.find({age:{$lt:28}});


    // 4. less than equal to -> $lte

    // const user = await userSchema.find({age:{$lte:28}});


    // 5. greator than -> $gt

    // const user = await userSchema.find({age:{$gt:28}});


    // 6. greator than equal to  -> $gte

    // const user = await userSchema.find({age:{$gte:28}});


    // 7. return objects that take array values in it -> $in

    // const user = await userSchema.find({age:{$in:[28,31,30]}});


    // 8. opposite of $in -> $nin

    // const user = await userSchema.find({age:{$nin:[28,31,30]}});


    // 9. return that object which take giving field -> $exists

    //  const user = await userSchema.find({isAdmin:{$exists:true}});


    // 10. and operator (two or more conditions) -> $and

    // const user = await userSchema.find({$and:[{age:{$gt:28}},{$lt:35}]});


    // 11. or operator (two or more conditions) -> $or

    // const user = await userSchema.find({$or:[{age:{$gt:28}},{$lt:35}]});


    // 12. regex -> $regex

    // const user = await userSchema.find({username:{$regex:/.*e$/i}});


    res.send(user);

    // Uncomment one by one all operators and check it's output!

})

app.listen(3000);