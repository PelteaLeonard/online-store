import asyncHandler from "express-async-handler";

class ClientController {
  constructor(clientService) {
    this.clientService = clientService;
  }

  create = asyncHandler(async (req, res) => {
    const { user } = req.body;
    const client = await this.clientService.create({
      user,
    });
    res.json({
      client,
      message: `The client ${client.user} has been created!`,
      severity: "success",
    });
  });

  getAll = asyncHandler(async (_req, res) => {
    const client = await this.clientService.getAll();
    res.json(client);
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const clients = await this.clientService.getById(id);
    res.json(clients);
  });

  getByUser = asyncHandler(async (req, res) => {
    const { user } = req.params;
    const clients = await this.userService.getByUser(user);
    res.json(clients);
  });

  deleteAll = asyncHandler(async (_req, res) => {
    const count = await this.clientService.deleteAll();
    res.json({
      message: `A number of ${count} clients has been deleted!`,
      severity: "success",
    });
  });

  deleteById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const client = await this.clientService.deleteById(id);
    res.json({
      message: `The user ${client.user}  has been deleted successfully!`,
      severity: "success",
    });
  });

  deleteByUser = asyncHandler(async (req, res) => {
    const { client } = req.params;
    const count = await this.clientService.deleteByUser(client);
    res.json({
      message: `A number of ${count} clients  has been deleted!!`,
      severity: "success",
    });
  });
}
