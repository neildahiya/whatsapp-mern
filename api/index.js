const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/User");
const connectDB = require("./config/db");
const chatRouter = require("./routes/chatRoutes");
const server = require("http").createServer(app);
const options = {};
const io = require("socket.io")(server, options);
dotenv.config({ path: "./config/config.env" });
require("./config/passport");

// Middlewares
app.use(cookieParser());
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Connecting DB
connectDB();

// Routes
// server.use("/auth/google", authRoutes);
app.use("/user", userRouter);
app.use("/chat", chatRouter);

app.get(
  "/",
  // passport.authenticate("google", { failureRedirect: "/", session: false }),
  (req, res) => {
    res.status(200).send("You have reached the last route...");
  }
);

io.on("connection", (socket) => {
  socket.on("new chat page", (msg) => {
    console.log("person: " + JSON.stringify(msg));
  });
});

// server.listen(3000);

// Listen
const PORT = process.env.PORT || 5000;
server.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT} `.blue.bold
  )
);
