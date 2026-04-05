const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.all("/voice", (req, res) => {
  res.set("Content-Type", "text/xml");

  return res.send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Hello, thank you for calling. How can I help you?</Say>
</Response>`);
});
