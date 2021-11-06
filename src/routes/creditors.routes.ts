import { Router } from "express";

import { CreateCreditorController } from "../modules/creditors/useCases/createCreditor/CreateCreditorController";
import { DeleteCreditorController } from "../modules/creditors/useCases/deleteCreditor/DeleteCreditorController";
import { UpdateCreditorController } from "../modules/creditors/useCases/updateCreditor/UpdateCreditorController";
import { AllCreditorsController } from "../modules/creditors/useCases/allCreditors/AllCreditorsController";

const createCreditorController = new CreateCreditorController();
const deleteCreditorController = new DeleteCreditorController();
const updateCreditorController = new UpdateCreditorController();
const allCreditorsController = new AllCreditorsController();

const creditorsRoutes = Router();

creditorsRoutes.post("/", createCreditorController.handle);
creditorsRoutes.post("/delete", deleteCreditorController.handle);

creditorsRoutes.patch("/update", updateCreditorController.handle);

creditorsRoutes.get("/all", allCreditorsController.handle);


export { creditorsRoutes };