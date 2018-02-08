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

<<<<<<< HEAD

app.listen(8000, (res)=>{
    console.log('server is initialized');
    // res.end('hello')
=======
app.listen(8000, (req, res)=>{   
    console.log('server is initialized');
    res.end();
>>>>>>> 88203c555fb665b7e21edb229a3fba9cd887de92
})
