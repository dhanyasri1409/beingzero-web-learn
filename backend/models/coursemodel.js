const mongoose = require("mongoose");

const course = new mongoose.Schema({
  id : Number,
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  articles: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Negative");
    },
  },
  isDeleted: {
      type: Boolean,
      default: false
  }
});

const courseModel = mongoose.model("course", course);

module.exports = courseModel;