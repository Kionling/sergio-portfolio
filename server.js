var express = require("express");

var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("Images"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/portfolio", function (req, res) {
  res.sendFile(path.join(__dirname, "portfolio.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "contact.html"));
});

app.listen(PORT, function () {
  console.log("localhost:" + PORT);
});
