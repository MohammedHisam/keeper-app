var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var dotenv = require('dotenv').config();

mongoose.connect("mongodb+srv://hisam:"+process.env.DB+"@cluster0.0j3iiev.mongodb.net/?retryWrites=true&w=majority");


const userSchema = new mongoose.Schema({
    title: String,
    content: String
});


const User = new mongoose.model("User", userSchema);


  


router.post('/', function(req, res, next){
  
  // a document instance
  var toDoList1 = new User({ title: req.body.title, content: req.body.content});

  console.log(toDoList1);
 
  // save model to database
  toDoList1.save(function (err, toDoList) {
    if (err) return console.error(err);
    console.log(toDoList.title + " saved to ToDoList collection.");
  });

});


router.get('/', function(req, res, next){
  User.find(function(err, foundToDoLists){
    if(!err){
      res.send(foundToDoLists);
    } else {
      res.send(err);
    }
    
  });
  
});

router.delete('/:listId', function(req, res, next){

  User.deleteOne(
    {_id: req.params.listId},
    function(err){
      if(!err){
        console.log("Successfully Deleted");
      } else {
        console.log(err);
      }
    }
  );

});


module.exports = router;