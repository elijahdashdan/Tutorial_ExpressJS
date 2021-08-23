const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", function(request,response){
  response.send("<h1>Hello</h1>");
});

app.get("/contact", function(request,response){
  response.send("Contact me: elijahdan.seballos@gmail.com");
});

app.get("/about", function(request,response){
  response.send("Cannot get about");
});

app.get("/hobbies", function(request,response){
  response.send("Testing");
});

app.listen(3000, function(){
  console.log("Server started at Port 3000");
});
