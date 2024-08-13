const express = require("express");
const router = express.Router();


const { getContact } = require("../Controllers/contactController");
const { deleteContact } = require("../Controllers/contactController");
const { updateContact } = require("../Controllers/contactController");
const { getidContact } = require("../Controllers/contactController");
const { createContact } = require("../Controllers/contactController");
const { authHandler } = require("../middlewares/authHandler");
const errorHandler = require("../middlewares/errorHandler");



router.route('/').all(authHandler,errorHandler).post(createContact).get(getContact);





router.route("/:id").all(authHandler,errorHandler).delete(deleteContact).put(updateContact).get(getidContact);

module.exports = router;