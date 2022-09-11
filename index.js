const express = require("express"); // tải node_module
const app = express(); //trả lại 1 instance
const port = 3000; // chạy web ở cổng nào
//route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//địa chỉ IP: 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
