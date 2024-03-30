const express = require("express");
const app = express();
const port = 3000;

// GET request to root URL
app.get("/", (req, res) => {
  res.send("Hello World");
});
//Routes
// GET request to /user endpoint
app.get("/user", (req, res) => {
  const user = {
    id: "1",
    name: "username",
    email: "username@gmail.com",
  };
  res.json(user);
});

// POST request to /users endpoint
app.post("/users", (req, res) => {
  const data = req.body;
  console.log(data);
  res.json("success");
});

// DELETE request to /users/:id endpoint
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  // Add logic to delete user with specified ID
  res.json(`User ${userId} deleted successfully`);
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
