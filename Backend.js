const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((error) => console.error("MongoDB connection error:", error));

const Drug = mongoose.model("Drug", new mongoose.Schema({
  name: String,
  quantity: Number,
  supplier: String,
}));


app.post("/drugs", async (req, res) => {
  try {
    const drug = new Drug(req.body);
    await drug.save();
    res.status(201).send(drug);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/drugs", async (req, res) => {
  try {
    const drugs = await Drug.find();
    res.send(drugs);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/drugs/:id", async (req, res) => {
  try {
    const drug = await Drug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!drug) return res.status(404).send("Drug not found");
    res.send(drug);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/drugs/:id", async (req, res) => {
  try {
    const drug = await Drug.findByIdAndDelete(req.params.id);
    if (!drug) return res.status(404).send("Drug not found");
    res.send("Drug deleted successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
