const express = require("express");
const { replyToTicket, closeTicket } = require("../controllers/replyController");
const auth = require('../middleware/authentication')

const router = express.Router()

/**
 * @swagger
 * /tickets/{id}/reply:
 *   post:
 *     tags:
 *       - Ticket
 *     summary: Reply to a ticket
 *     description: Add a reply to an existing ticket and update ticket status
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         description: Ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Reply created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 replyToTicket:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     message:
 *                       type: string
 *                     authorId:
 *                       type: integer
 *                     ticketId:
 *                       type: integer
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                 updatedTicket:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     status:
 *                       type: string
 *       '404':
 *         description: Ticket not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /tickets/{id}/close:
 *   patch:
 *     tags:
 *       - Tickets
 *     summary: Close a ticket
 *     description: Update a ticket status to DONE
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     responses:
 *       '201':
 *         description: Ticket closed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Ticket has been closed!
 *                 updatedTicket:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     status:
 *                       type: string
 *       '404':
 *         description: Ticket not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.post("/:id/reply", auth, replyToTicket)
router.patch("/:id/close", auth, closeTicket)

module.exports = router
