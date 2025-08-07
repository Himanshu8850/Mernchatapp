const express = require("express");
const http = require("http");
const data = require("./data/data.js");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const connectdb = require("./config/db.js");
const colors = require("colors");
const userRoutes = require("./routes/Userroutes.js");
const chatRoutes = require("./routes/chatRoutes.js");
const messageRoutes = require("./routes/messageRoutes.js");
const { notFound, errorhandler } = require("./middlewares/errorMiddleware.js");
const path = require("path");
dotenv.config();
connectdb();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

//--------------- Deployment-----------------------------------
const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));
} else {
  app.get("/", (req, res) => {
    res.send("API is Running Successfully");
  });
}
//-------------------------------------------------------

app.get("/chat/:id", (req, res) => {
  const axe = data.find((c) => c.id === req.params.id);
  res.send(axe);
});

app.use(notFound);
app.use(errorhandler);

const PORT = 5000;

const server = app.listen(PORT, () => {
  console.log(`port:${PORT}`.yellow.bold);
});

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "https://mernchatapp-1-9rfm.onrender.com",
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.on("disconnect", () => {
    console.log("USER DISCONNECTED");
  });
});
