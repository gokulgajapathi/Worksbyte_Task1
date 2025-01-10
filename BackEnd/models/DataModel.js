const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  task: { type: String, required: true },
});

module.exports = mongoose.model("Data", DataSchema);
