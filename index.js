const express = require("express");
const app = express();

//ROUTES
app.get("/", (req, res) => {
  res.send("home page route");
});

app.get("/aboutUs", (req, res) => {
  res.send("About us page route");
});

app.get("/help", (req, res) => {
  res.send("Help page route");
});

app.get("/contact", (req, res) => {
  res.send("contact page route");
});

app.listen(4500);
