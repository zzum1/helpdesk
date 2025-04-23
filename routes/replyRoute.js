const express = require("express");
const { replyToTicket } = require("../controllers/replyController");
const auth = require('../middleware/authentication')

const router = express.Router()

router.post("/:id/reply", auth, replyToTicket)

module.exports = router
