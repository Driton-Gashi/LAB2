const express = require("express");
const router = express.Router();
const { signupUser, loginUser } = require("../controllers/userControllers");

// POST route for user login
router.post("/login", loginUser);

// POST route for user signup
router.post("/signup", signupUser);

// GET route for retrieving user data
router.get("/", (req, res) => {
  // Logic to retrieve user data
  res.send("GET request to /api/user endpoint");
});

module.exports = router;
