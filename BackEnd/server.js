const dot = require("dotenv"); 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dataRoutes = require("./routes/data");

const app = express();
const PORT = process.env.PORT || 8080;
dot.config();
const corsOptions = {
  origin: process.env.APP_URL,
  methods: 'GET'
};


app.use(express.json());
app.use(cors(corsOptions));

console.log(process.env.MONGO_URL);
console.log(process.env.APP_URL)

mongoose.connect(process.env.MONGO_URL)
// mongoose.connect("mongodb://localhost:27017/Task1",)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  app.get("/", (req, res) => {
    
      res.send("Task server");
    
  });

app.use("/api", dataRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
