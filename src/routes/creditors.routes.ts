import { Router } from "express";

import { CreateCreditorController } from "../modules/creditors/useCases/createCreditor/CreateCreditorController";

const createCreditorController = new CreateCreditorController()

const creditorsRoutes = Router();

creditorsRoutes.post("/", createCreditorController.handle);

export { creditorsRoutes };