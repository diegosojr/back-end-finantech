const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  deadline: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Goal", GoalSchema);