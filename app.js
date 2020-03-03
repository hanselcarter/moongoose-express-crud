const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
//middleware are functions that executes when we hit specified route
app.use(cors());
app.use(bodyParser.json());

//import routes
const postsRoutes = require("./routes/posts");

app.use("/posts", postsRoutes);

//routes
app.get("/", (req, res) => {
  res.send("we are on home");
});

//connect db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to db")
);
// how to start listening
app.listen(3000);
