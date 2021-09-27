const http = require("http");
const proxy = http
  .createServer((req, res) => {
    res.write("welcome to nodejs");
    res.end("okay");
  })
  .listen(4500);
