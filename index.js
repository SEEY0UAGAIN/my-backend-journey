const express = require("express");
const app = express();
const port = 3000;

const usersRouter = require("./user");

app.use(express.json());

app.use("/api", usersRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
