import { inject, injectable } from "tsyringe";

import { Debtor } from "../../entities/Debtor";
import { IDebtorsRepository } from "../../repositories/IDebtorsRepository";

@injectable()
class AllDebtorsUseCase {
    constructor(
        @inject("DebtorsRepository")
        private debtorsReposiroty: IDebtorsRepository
    ) {}

    async execute(): Promise<Debtor[]> {
        const debtors= await this.debtorsReposiroty.list();

        return debtors;

    }

}

export { AllDebtorsUseCase };
