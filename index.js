const express = require("express");
const app = express();

// Twilio needs raw URL-encoded body sometimes (safe to include)
app.use(express.urlencoded({ extended: false }));

// Health check (test server)
app.get("/", (req, res) => {
  res.send("Server is alive");
});

// Voice webhook (THIS IS WHAT TWILIO CALLS)
app.all("/voice", (req, res) => {
  res.set("Content-Type", "text/xml");

  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Hello. This is your AI receptionist. How can I help you today?</Say>
</Response>`;

  res.status(200).send(twiml);
});

// Start server (REQUIRED for Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
