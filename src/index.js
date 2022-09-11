const path = require("path");
const express = require("express"); // tải node_module
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express(); //trả lại 1 instance
const port = 4000;

//HTTP logger
app.use(morgan("combined"));

// Template engine
// app.engine("handlebars", engine());
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});
//địa chỉ IP: 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port http:localhost:${port}`);
});
