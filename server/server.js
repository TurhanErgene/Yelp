require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("get all restaurants");
})



const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
