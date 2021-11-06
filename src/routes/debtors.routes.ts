import { Router } from "express";

import { CreateDebtorController } from "../modules/debtors/useCases/createDebtor/CreateDebtorController";
import { DeleteDebtorController } from "../modules/debtors/useCases/deleteDebtor/DeleteDebtorController";
import { UpdateDebtorController } from "../modules/debtors/useCases/updateDebtor/UpdateDebtorController";
import { AllDebtorsController } from "../modules/debtors/useCases/allDebtors/AlldebtorsController";

const createDebtorController = new CreateDebtorController();
const deleteDebtorController = new DeleteDebtorController();
const updateDebtorController = new UpdateDebtorController();
const allDebtorsController = new AllDebtorsController();

const debtorsRoutes = Router();

debtorsRoutes.post("/", createDebtorController.handle)
debtorsRoutes.post("/delete", deleteDebtorController.handle);

debtorsRoutes.patch("/update", updateDebtorController.handle);

debtorsRoutes.get("/all", allDebtorsController.handle);

export { debtorsRoutes };