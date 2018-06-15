var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 8080;

// Initialize Express
var app = express();

// Configure middleware


var indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/newsdb");

// Routes

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
