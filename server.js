var express = require('express');
var app = express();
var multer = require("multer");
var upload = multer()

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/upload", upload.single("upload"), function(request, response){
  response.json({"name" : request.file["originalname"], "size" : request.file["size"]})
});

app.listen(process.env.PORT, function () {
});
