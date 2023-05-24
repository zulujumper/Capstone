const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z ]*$/
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  message: {
    type: String
  }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
