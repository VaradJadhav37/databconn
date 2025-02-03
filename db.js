const express= require('express');
require("dotenv").config();
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);
const User=require('./models/User.js');
const PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});
app.get('/', function (req,res) {
    res.send('Hello World!');
});
const createUser = async () => {
    try {
        const newUser = new User({
            name: "Ash",
            age: 22
        });
        await newUser.save();
        console.log("User saved:", newUser);
    } catch (error) {
        console.error("Error saving user:", error);
    }
};

createUser();
