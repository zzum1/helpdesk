const express = require('express')
const { createTicket, getAllUserTickets, getTicketById } = require('../controllers/ticketController')
const auth = require('../middleware/authentication')

const router = express.Router()

router.post('/', auth, createTicket)
router.get('/', auth, getAllUserTickets)
router.get('/:id', auth, getTicketById)

module.exports = router;