import { Router } from "express";

import { creditorsRoutes } from "./creditors.routes";
import { debtorsRoutes } from "./debtors.routes";
import { paymentsRoutes } from "./payments.routes";

const router = Router();

router.use("/payments", paymentsRoutes);
router.use("/debtors", debtorsRoutes);
router.use("/creditors", creditorsRoutes);

export { router };