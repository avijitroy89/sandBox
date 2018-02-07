const express = require("express");
const myRoutes = require("./routes");
const bodyParser = require('body-parser');

const app = express();
// for parsing application/json -- changed file
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

app.set('view engine', "ejs");
app.set("views", "./views");

// static path
app.use(express.static('public'));


app.use("/", myRoutes);


app.listen(8000, (err)=>{
    if (err) throw err;
    console.log('server is initialized');
})
