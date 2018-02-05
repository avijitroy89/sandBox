const express = require("express");
const app = express();
const myRoutes = require("./routes");

app.use("/", myRoutes);


app.listen(9000, (err)=>{
    if (err) throw err;
    console.log('server is initialized');
})