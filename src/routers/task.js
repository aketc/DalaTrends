const mongoose = require("mongoose");

const router = mongoose.model("router", {
  title: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = router;