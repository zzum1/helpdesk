const express = require("express");
const authRoute = require("./routes/authRoute");
const ticketRoute = require("./routes/ticketRoute")
const replyRoute = require("./routes/replyRoute")

const app = express();
app.use(express.json());

app.use("/", (req, res, next) => {
  console.log(`${req.method} is coming!`);
  next();
});
app.use("/api/v1/auth", authRoute);
app.use("/api/tickets", ticketRoute)
app.use("/api/tickets", replyRoute)


module.exports = app;
