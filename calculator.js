//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmical.html");
});

app.post("/", function(req, res){
  a=Number(req.body.height);
  b=Number(req.body.weight);

  res.send("The result is...... "+ (b/(a*a)));
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
