const express = require("express");
require("./db/mongoose");
const Task = require("./routers/task");
const User = require("./routers/user");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is running on port " + port);
});


