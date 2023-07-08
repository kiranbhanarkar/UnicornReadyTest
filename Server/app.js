const express = require("express");
const clc = require("cli-color");
require("dotenv").config();

//file imports
const db = require("./db");
const AuthRouter = require("./Controllers/AuthController");

//variables
const app = express();
const PORT = process.env.PORT;

//Routes
app.use("/auth", AuthRouter);

app.get("/", (req, res) =>{
    return res.send({
        status: 200,
        message: `Server is running ${PORT}`
    })
});



app.listen(PORT, ()=>{
    console.log(clc.green.underline("running on 8000 port"));
})