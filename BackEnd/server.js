const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dataRoutes = require("./routes/data");

const app = express();
const PORT = 5000;


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@gokulcluster.mvt7o.mongodb.net/task1?retryWrites=true&w=majority&appName=GokulCluster", {
  // mongoose.connect("mongodb://localhost:27017/task1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  app.get("/", (req, res) => {
    
      res.send("Task server");
    
  });

app.use("/api", dataRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
