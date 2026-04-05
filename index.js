// Load Express
const express = require("express");
const app = express();

// Health check route
app.get("/", (req, res) => {
  res.send("Server is alive");
});

// Voice route for Twilio
app.all("/voice", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(`
<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Hello, thank you for calling. How can I help you?</Say>
</Response>
  `.trim());
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
