const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const cookieParser = require("cookie-parser");
// const passport = require("passport");
const userRouter = require("./routes/User");
// const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });
require("./config/passport");

// Middlewares
app.use(cookieParser());
app.use(express.json());
// app.use(passport.initialize());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Connecting DB
connectDB();

// Routes
// app.use("/auth/google", authRoutes);
app.use("/user", userRouter);

app.get(
  "/",
  // passport.authenticate("google", { failureRedirect: "/", session: false }),
  (req, res) => {
    res.status(200).send("hello");
  }
);

// Listen
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT} `.blue.bold
  )
);
