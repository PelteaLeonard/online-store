import asyncHandler from "express-async-handler";

class PendingClientController {
  constructor(pendingClientService) {
    this.pendingClientService = pendingClientService;
  }

  create = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, token } = req.body;

    const pendingClient = await this.pendingClientService.create({
      firstName,
      lastName,
      email,
      password,
      token,
    });

    res.json({
      pendingClient,
      message: `The pending client ${pendingClient.firstName} ${pendingClient.lastName} has been created successfully!`,
      severity: "success",
    });
  });

  getAll = asyncHandler(async (_req, res) => {
    const pendingClient = await this.pendingClientService.getAll();
    res.json(pendingClient);
  });

  getById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const pendingClient = await this.pendingClientService.getById(id);
    res.json(pendingClient);
  });

  getByFirstName = asyncHandler(async (req, res) => {
    const { firstName } = req.params;
    const pendingClient = await this.pendingClientService.getByFirstName(
      firstName
    );
    res.json(pendingClient);
  });

  getByLastName = asyncHandler(async (req, res) => {
    const { lastName } = req.params;
    const pendingClient = await this.pendingClientService.getByLastName(
      lastName
    );
    res.json(pendingClient);
  });

  getByEmail = asyncHandler(async (req, res) => {
    const { email } = req.params;
    const pendingClient = await this.pendingClientService.getByEmail(email);
    res.json(pendingClient);
  });

  getByToken = asyncHandler(async (req, res) => {
    const { token } = req.params;
    const pendingClient = await this.pendingClientService.getByToken(token);
    res.json(pendingClient);
  });

  updateById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password, token } = req.body;
    const pendingClient = await this.pendingClientService.updateById(id, {
      firstName,
      lastName,
      email,
      password,
      token,
    });
    res.json({
      message: `The pending client with name ${pendingClient.firstName} ${pendingClient.lastName} has been updated!`,
      severity: "success",
    });
  });

  deleteAll = asyncHandler(async (_req, res) => {
    const count = await this.pendingClientService.deleteAll();
    res.json({
      message: `A number of ${count} pending client/s has been deleted!`,
      severity: "success",
    });
  });

  deleteById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const pendingClient = await this.pendingClientService.deleteById(id);
    res.json({
      message: `The pending client ${pendingClient.firstName} ${pendingClient.lastName}  has been deleted successfully!`,
      severity: "success",
    });
  });

  deleteByFirstName = asyncHandler(async (req, res) => {
    const { firstName } = req.params;
    const count = await this.pendingClientService.deleteByFirstName(firstName);
    res.json({
      message: `A number of ${count} pending clients with first name ${firstName} have been deleted!!`,
      severity: "success",
    });
  });

  deleteByLastName = asyncHandler(async (req, res) => {
    const { lastName } = req.params;
    const count = await this.pendingClientService.deleteByLastName(lastName);
    res.json({
      message: `A number of ${count} pending clients with last name ${lastName} have been deleted!!`,
      severity: "success",
    });
  });

  deleteByEmail = asyncHandler(async (req, res) => {
    const { email } = req.params;
    const pendingClient = await this.pendingClientService.deleteByEmail(email);
    
    console.log(pendingClient);

    res.json({
      message: `A pending client with email ${pendingClient.email}  has been deleted!`,
      severity: "success",
    });
  });

  deleteByToken = asyncHandler(async (req, res) => {
    const { token } = req.params;
    const pendingClient = await this.pendingClientService.deleteByToken(token);
    res.json({
      message: `A pending client with token ${pendingClient.token}  has been deleted!`,
      severity: "success",
    });
  });
}

export default PendingClientController;
