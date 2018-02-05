const express = require("express");
const myRoutes = express();

myRoutes.get("/", (req, res)=>{
    res.send('this is home page');
})


// exporting myRoutes
module.exports = myRoutes;