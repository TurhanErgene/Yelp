require("dotenv").config();

const express = require("express");

const app = express();



// get restaurants
app.get("/api/v1/restaurants", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["McDondalds", "Subway", "Dominos", "Köpenhamns Falafel"],
    },
  });
});

//get a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req);
})

app.post("/api/v1/restaurants", (req, res) => {
  console.log(req);
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
