const mongoose = require("mongoose");
const Joi = require("joi");


// Without Validation

// const userSchema = mongoose.Schema({
//     username : String,
//     age : Number,
//     email : String,
//     password : String
// })

// Above Schema create a user if i provide only one field it doesn't care how much field is required to create object in database.


// So i use mongodb validation, that is below:

const userSchema = mongoose.Schema({
    username: {
        type: String,
        minLength: 3,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minLength: 8,
        required: true
    }
})

let userModel = mongoose.model("user", userSchema);

// Above Schema create an object in database if all fields are fullfilled otherwise it give us an error!


// Hum har baar {schema} create krna ka bad ek {validator} function banai ha jo {frontend} sa aana wali fields ko check kaara ga agr wo fields {validator} ka hissaab sa thk hoi to wo aaga {schema} ko wo fields dei dei ga or phir {mongoose} apni {validation} ko check kara ga jo hum na uppar {schema} baanaya hai or than database ma {object} create hoga.


// Now create {validor} function in this function we use {joi}.So, first require it.

function validateSchema(data) {
    const schema = Joi.object({
        username: Joi.string().min(3).required(),
        age: Joi.number().min(18).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })

    const resultOfSchema = schema.validate(data);

    console.log(resultOfSchema.error?.message);

}


module.exports = { userModel, validateSchema }
