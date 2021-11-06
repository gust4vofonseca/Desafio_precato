import { Router } from "express";

import { CreatePaymentController } from "../modules/payments/useCases/createPayment/CreatePaymentController";
import { DeletePaymentController } from "../modules/payments/useCases/deletePayment/DeletePaymentController";
import { AllPaymentsController } from "../modules/payments/useCases/allPayments/AllPaymentsController";

const createPaymentController = new CreatePaymentController();
const deletePaymentController = new DeletePaymentController();
const allPaymentsController = new AllPaymentsController();

const paymentsRoutes = Router();

paymentsRoutes.post("/", createPaymentController.handle)
paymentsRoutes.post("/delete", deletePaymentController.handle);

paymentsRoutes.get("/all", allPaymentsController.handle);

export { paymentsRoutes };