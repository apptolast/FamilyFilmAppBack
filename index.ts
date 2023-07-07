import express from "express";

// Initialize the express app
const app = express();

// Hello World GET endpoint
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Set the default port to 3000, or use the PORT environment variable
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Express 🥟 Server Listening on port ${port}`));

