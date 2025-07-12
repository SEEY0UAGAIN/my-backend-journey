const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Pop", age: 25 },
  { id: 2, name: "May", age: 30 },
];

router.get("/users", (req, res) => {
  res.json(users);
});

router.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

router.put("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not Found" });
  }
  users[userIndex] = { ...users[userIndex], ...req.body };
  res.json(users[userIndex]);
});

router.delete("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  users = users.find((u) => u.id === userId);
  res.json({ message: "User deleted " });
});

module.exports = router;
