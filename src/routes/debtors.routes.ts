import { Router } from "express";

import { CreateDebtorController } from "../modules/debtors/useCases/createDebtor/CreateDebtorController";

const createDebtorController = new CreateDebtorController();

const debtorsRoutes = Router();

debtorsRoutes.post("/", createDebtorController.handle)

export { debtorsRoutes };