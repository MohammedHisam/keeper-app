var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dotenv = require('dotenv').config();

var app = express();





app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/home', indexRouter);
app.use('/users', usersRouter);



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



if ( process.env.NODE_ENV == "production"){

    app.use(express.static("client/build"));

    console.log("Working");
    app.get("*", (req, res) => {
      
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    });
 

} 
// else { 
//   app.get('/', function(req, res, next){
//         console.log("Working2");
//         res.send("Api working");
//       });
      
// }

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function () {
  console.log("Server started succesfully on port " + port);
});
