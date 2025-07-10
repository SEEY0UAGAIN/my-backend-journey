const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello Back-end Dev!");
});

app.get("/about", (req, res) => {
  res.send("My name is JJJ");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
