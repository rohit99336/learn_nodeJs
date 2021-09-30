const http = require("http");
http
  .createServer((req, res) => {
    res.write("<h1>welcome to nodejs</h1>");
    res.end("okay");
  })
  .listen(4500);
console.log("My Name is Rohit");
