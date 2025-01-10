const express = require("express");
const router = express.Router();
const DataModel = require("../models/DataModel");

router.get("/fetch-data", async (req, res) => {
  try {
    console.log("api");
    const data = await DataModel.find();
    console.log(data);
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

module.exports = router;
