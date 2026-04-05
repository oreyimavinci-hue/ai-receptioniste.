const express = require("express");
const app = express();

app.all("/voice", (req, res) => {
  res.type("text/xml");
  res.send(`
    <Response>
      <Say>Hello, thank you for calling. How can I help you?</Say>
    </Response>
  `);
});
