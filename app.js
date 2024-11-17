const express = require("express");
const bodyParser = require("body-parser");
const taskRoutes = require("./taskRoutes");
const authMiddleware = require("./authMiddleware");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(authMiddleware);
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
