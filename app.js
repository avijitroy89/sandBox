const express = require("express");
const myRoutes = require("./routes");
const bodyParser = require('body-parser');

const app = express();
// for parsing application/json 
app.use(bodyParser.json()); 
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
