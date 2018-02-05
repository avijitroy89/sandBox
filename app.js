const express = require("express");
const app = express();
const myRoutes = require("./routes");

app.set('view engine', "ejs");
app.set("views", "./views");

// static path
app.use(express.static('public'));


app.use("/", myRoutes);


app.listen(9000, (err)=>{
    if (err) throw err;
    console.log('server is initialized');
})