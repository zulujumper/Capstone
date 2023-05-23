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

// Get (read) all records from the collection
// router.get("/", (request, response) => {
//   Contact.find({}, (error, record) => {
//     if (error) return response.status(500).json(error.errors);

//     response.json(record);
//   });
// });

// Get a single record by ID using a query parameter
// router.get("/:id", (request, response) => {
//   Contact.findById(request.params.id, (error, record) => {
//     if (error) return response.status(500).json(error.errors);

//     response.json(record);
//   });
// });

// router.delete("/:id", (request, response) => {
//   Contact.findByIdAndRemove(request.params.id, {}, (error, record) => {
//     if (error) return response.status(500).json(error.errors);

//     response.json(record);
//   });
// });

// router.put("/:id", (request, response) => {
//   const body = request.body;
//   Contact.findByIdAndUpdate(
//     request.params.id,
//     {
//       $set: {
//         // Take note that the customer is not included, so it can't update the customer
//         crust: body.crust,
//         cheese: body.cheese,
//         sauce: body.sauce,
//         toppings: body.toppings
//       }
//     },
//     {
//       new: true,
//       upsert: true
//     },
//     (error, record) => {
//       if (error?.name === "ValidationError")
//         return response.status(400).json(error.errors);
//       if (error) return response.status(500).json(error.errors);

//       response.json(record);
//     }
//   );
// });

module.exports = router;
