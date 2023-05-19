const mongoose = require("mongoose");

const eggSchema = new mongoose.Schema({
  zipCode: {
    type: Number,
    required: true,
    validate: /^[0-9]*$/
  }
});

const Eggs = mongoose.model("Eggs", eggSchema);

module.exports = Eggs;
