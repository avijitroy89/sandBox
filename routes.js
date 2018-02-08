const express = require("express");
const myRoutes = express();

// database connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://students:students@ds221258.mlab.com:21258/testnode', (err)=>{
    if(err) throw err;
    console.log('database connected');
});



var studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });
 var teacherSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });
 var moviesSchema = mongoose.Schema({     
        title: String,
        imdbId: String,
        releaseDate: String,
        releaseCountry: String,
        releaseYear: Number,
        releaseMonth: Number,
        releaseDay: Number
 });
 var Student = mongoose.model("Student", studentSchema);
 var Teacher = mongoose.model("Teachers", teacherSchema);
 var Movies = mongoose.model("Movies", moviesSchema);

myRoutes.get("/", (req, res)=>{
    res.render('index2');
    res.end();
});
// myRoutes.get("/index2", (req, res)=>{
//     res.render('index2');
// });
// myRoutes.get("/addstudent", (req, res)=>{
//     res.render('addstudent');
// });
// myRoutes.post("/addstudent", (req, res)=>{
//     console.log(req.body);
//     var newStudent = new Student({
//         name: req.body.name,
//         age: req.body.age,
//         nationality: req.body.nationality
//      });

//      newStudent.save((err, person)=>{
//          if(err){
//              res.send('server error !');
//          }else{
//             res.render('formsubmitpage',{data:req.body});
//          }
//      })    
// });
// myRoutes.get("/addteacher", (req, res)=>{
//     res.render('addteacher');
// });
// myRoutes.post("/addteacher", (req, res)=>{
//     const newTeacher = new Teacher({
//         name:req.body.name,
//         age:req.body.age,
//         nationality:req.body.nationality
//     })

//     newTeacher.save((err, data)=>{
//         if(err){
//             res.send('server error !');
//         }else{
//            res.render('formsubmitpage',{data:data});
//         }
//     })
// });
// myRoutes.get("/getmovies", (req, res)=>{
//     Movies.find((err, movies)=>{
//         if(err) throw err;
//         res.json(movies)
//     })
    
// });

myRoutes.get('/signup', (req, res)=>{
    res.render('signup');
    res.end();
})
// exporting myRoutes
module.exports = myRoutes;