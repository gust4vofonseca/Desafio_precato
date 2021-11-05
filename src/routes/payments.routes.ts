import { Router } from "express";

import { CreatePaymentController } from "../modules/payments/useCases/createPayment/CreatePaymentController";

const createPaymentController = new CreatePaymentController()

const paymentsRoutes = Router();

paymentsRoutes.post("/", createPaymentController.handle)

export { paymentsRoutes };