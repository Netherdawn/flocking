const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const path = require("path");

app.use("/contents", express.static(__dirname + "/contents"));

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "./contents") });
});

app.listen(port, function () {
  console.log(`listening`);
});
