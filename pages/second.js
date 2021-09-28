const data = require("./data");
const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "applicationjson" });
    res.write(JSON.stringify(data));
    res.end("okay");
  })
  .listen(4500);
// console.log("My Name is unknon");
