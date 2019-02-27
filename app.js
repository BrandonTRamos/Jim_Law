var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'))


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + 'public/index.html'));
});

app.post("/contact", function(req,res){
  console.log("Post Recieved.")
  res.status(200).send("Success")
})


app.listen(80,function(){
    console.log("Server running on port 80.")
});