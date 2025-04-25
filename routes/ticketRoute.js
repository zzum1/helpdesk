const express = require("express");
const {
  createTicket,
  getAllUserTickets,
  getTicketById,
} = require("../controllers/ticketController");
const auth = require("../middleware/authentication");

const router = express.Router();

/**
 * @swagger
 * /tickets:
 *   post:
 *     tags:
 *       - Tickets
 *     summary: Create a new ticket
 *     description: Create a new ticket
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Ticket created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 ticket:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string
 *                     userId:
 *                       type: integer
 *                     createdAt:
 *                       type: string
 *                       format: date-time
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
 * /tickets:
 *   get:
 *     tags:
 *       - Tickets
 *     summary: Get all user tickets
 *     description: Get all user tickets, ordered by creation date (newest first)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: List of tickets retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userTickets:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       userId:
 *                         type: integer
 *                         description: User ID who created the ticket
 *       '500':
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 */

/**
 * @swagger
 * /tickets/{id}:
 *   get:
 *     tags:
 *       - Tickets
 *     summary: Get ticket by ID
 *     description: Get detailed information about a specific ticket
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Ticket retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 ticket:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     title:
 *                       type: string
 *                     userId:
 *                       type: integer
 *                     status:
 *                       type: string
 *                       enum: [OPEN, ANSWERED, DONE]
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
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

router.post("/", auth, createTicket);
router.get("/", auth, getAllUserTickets);
router.get("/:id", auth, getTicketById);

module.exports = router;
