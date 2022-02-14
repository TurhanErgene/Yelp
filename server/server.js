require("dotenv").config();

const express = require('express')

const app = express();

const port = 3001

app.listen(port || 3001, ()=> {
  console.log(`server is listening on port ${port}`);
})
