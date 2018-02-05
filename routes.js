const express = require("express");
const myRoutes = express();


// database connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://avijitroy:avijit_12345@ds221258.mlab.com:21258/testnode', (err)=>{
    if(err) throw err;
    console.log('database connected');
});

var studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });
 var student = mongoose.model("Person", studentSchema);

myRoutes.get("/", (req, res)=>{
    res.send('this is home page');
});
myRoutes.get("/addstudent", (req, res)=>{
    res.render('addstudent');
});



// exporting myRoutes
module.exports = myRoutes;