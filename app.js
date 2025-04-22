const express = require("express");

const app = express();
app.use(express.json());

app.use("/", (req, res) => {
  console.log(`${req.method} is comming!`);
});

module.exports = app;
