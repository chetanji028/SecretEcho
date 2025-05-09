const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");
const loggerMiddleware = require("./middleware/loggerMiddleware");
const { generateAIResponse } = require("./utils/mockAI");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:3000" },
});

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Error handling
app.use(errorMiddleware);

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/secretecho", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Socket.io
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("message", async (message) => {
    io.emit("message", message); // Broadcast user message
    const aiResponse = {
      content: generateAIResponse(message.content),
      sender: "AI",
      timestamp: new Date(),
    };
    setTimeout(() => {
      io.emit("message", aiResponse); // Simulate AI response delay
    }, 1000);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));