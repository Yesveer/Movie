const express = require("express");
//const htpps = require("htpps");
//const request = require("request");
const app = express();
app.use(express.static("public"));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/SignIn", function(req,res){
  res.redirect("/indexs.html");
});

app.listen(process.env.PORT || 5000, function(){
  console.log("Server started at Port 5000");
});
