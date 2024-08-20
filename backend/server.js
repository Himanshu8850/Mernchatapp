const express = require("express");
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
connectdb();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

// app.get("/chat", (req, res) => {
//   res.send(data);
// });
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.get("/chat/:id", (req, res) => {
  const axe = data.find((c) => c.id === req.params.id);
  res.send(axe);
});

app.use(notFound);
app.use(errorhandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`port:${PORT}`.yellow.bold);
});
