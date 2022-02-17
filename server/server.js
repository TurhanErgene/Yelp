require("dotenv").config();

const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurants;");
    console.log(results);

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
});

//get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    console.log(req.params.id);

    const results = await db.query("select * from restaurants where id = $1", [req.params.id])
    //select * from restaurant where id = req.params.id
    //("select $2 from restaurants where id = $1", [req.params.id, "name"])
    console.log(results.rows[0]);

    res.status(200).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error.message);
  }
});

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
});

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
});

//delete a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
