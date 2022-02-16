require("dotenv").config();

const morgan = require("morgan");
const express = require("express");
const app = express();


app.use(express.json());

// get restaurants
app.get("/api/v1/restaurants", (req, res) => {
  console.log("route handler");
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

  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["McDondalds"]
    }
  })
})

// create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);
  console.log("create");

  res.status(201).json({
    status: "success",
    data: {
      restaurant: ["Bar italia"],
    },
  });
})

//update restaurants
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["Köpenhamns Falafel"],
    },
  });
})

//delete a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {

  res.status(204).json({
    status: "success",
  })
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
