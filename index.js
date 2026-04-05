const express = require("express");
const app = express();

app.all("/voice", (req, res) => {
  res.set("Content-Type", "text/xml");

  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Hello, thank you for calling. How can I help you?</Say>
</Response>`);
});
