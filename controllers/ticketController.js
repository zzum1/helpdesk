const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTicket = async (req, res) => {
  const { title, description } = req.body;

  const userId = req.user.id;

  try {
    const ticket = await prisma.ticket.create({
      data: {
        title,
        description,
        userId,
      },
    });
    res.status(201).json({ message: "Ticket has been created!", ticket });
  } catch (error) {
    res.status(500).json({ message: "Error while creating a ticket", error });
  }
};

const getAllUserTickets = async (req, res) => {
  try {
    const userTickets = await prisma.ticket.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        userId: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json({ userTickets });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while fetching user tickets", error });
  }
};

const getTicketById = async (req, res) => {

    const { id } = req.params;

    try {
        const ticket = await prisma.ticket.findUnique({
            where: {
                id: parseInt(id)
            },
        });

        if(!ticket) {
            return res.status(404).json({ message: "Not found" });
    
        }

        res.status(200).json({ message: "Success", ticket });

    } catch (error) {
        res.status(500).json({ message: "Failed to get ticket..." });
    }
}

module.exports = {
  createTicket,
  getAllUserTickets,
  getTicketById,
};
