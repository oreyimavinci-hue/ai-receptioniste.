const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.all("/voice", (req, res) => {
  res.set("Content-Type", "text/xml");

  res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Hello. Your AI receptionist is now connected. How can I help you?</Say>
</Response>`);
});

app.get("/", (req, res) => {
  res.send("Server is alive");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running"));
