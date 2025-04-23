const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const replyToTicket = async (req, res) => {

    const { message } = req.body;
    const { id } = req.params;

    const authorId = req.user.id;

    try {
        const ticket = await prisma.ticket.findUnique({
            where: {
                id: parseInt(id)
            },
        });

        if(!ticket) {
            return res.status(404).json({ message: "Not found" });
        }

        const replyToTicket = await prisma.reply.create({
            data: {
                message,
                authorId,
                ticketId: parseInt(id)
            }
        });

        const updatedTicket = await prisma.ticket.update({
            where: {
                id: parseInt(id)
            },
            data: {
                status: 'ANSWERED'
            }
        });
        res.status(201).json({ message: "Reply has been created!", replyToTicket, updatedTicket });

    } catch (error) {
        res.status(500).json({ message: "Failed reply to ticket..." });
    }
}

module.exports = {
    replyToTicket,
}