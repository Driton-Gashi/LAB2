const User = require("../models/userModel");

//login user

const loginUser = async (req, res) => {
  res.json({ mssg: "login user" });
};

//sign up user

const signupUser = async function (req, res) {
  if (!req.body || !req.body.email || !req.body.password) {
    return res.status(400).json({ error: req.body });
  }
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
