const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./router/userRouter.js");

app.use(express.json());
app.use(cors());
app.use("/users",userRouter);

app.listen(3006,()=>{
  console.log("server started");
})



