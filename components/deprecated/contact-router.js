const { Router } = require("express");
const Contact = require("../models/Contact");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newContact = new Contact(request.body);
  newContact.save((error, record) => {
    // if (error && error.name && error.name === "ValidationError")
    if (error?.name === "ValidationError")
      return response.status(400).json(error.errors);
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

module.exports = router;
