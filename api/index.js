const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });

// Config

// Middlewares
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Connecting DB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.status(200).send("hello");
});

// Listen
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT} `.blue.bold
  )
);
