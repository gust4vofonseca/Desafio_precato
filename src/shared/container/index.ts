import { container } from "tsyringe";

import { PaymentsRepository } from "../../modules/payments/repositories/implementations/PaymentsRepositories";
import { IPaymentsRepository } from "../../modules/payments/repositories/IPaymentsRepositories";

import { CreditorsRepository } from "../../modules/creditors/repositories/implementations/CreditorsReposiroty";
import { ICreditorsRepository } from "../../modules/creditors/repositories/ICreditorsRepository";

import { DebtorsRepository } from "../../modules/debtors/repositories/implementations/DebtorsRepository";
import { IDebtorsRepository } from "../../modules/debtors/repositories/IDebtorsRepository";

container.registerSingleton<IPaymentsRepository>(
    "PaymentsRepository",
    PaymentsRepository
);

container.registerSingleton<ICreditorsRepository>(
    "CreditorsRepository",
    CreditorsRepository
);

container.registerSingleton<IDebtorsRepository>(
    "DebtorsRepository",
    DebtorsRepository
);