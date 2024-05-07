const express = require("express");
const userRoutes = require("./routes/user");

const app = express();

app.use("/api/user", userRoutes);

app.listen(4000, () => {
  console.log("listening on port 4000");
});
