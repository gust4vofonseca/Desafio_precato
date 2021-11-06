import { inject, injectable } from "tsyringe";

import { ICreateDebtorDTO } from "../../dtos/ICreateDebtorDTO";
import { IDebtorsRepository } from "../../repositories/IDebtorsRepository";

@injectable()
class DeleteDebtorUseCase {
    constructor(
        @inject("DebtorsRepository")
        private debtorsReposiroty: IDebtorsRepository
    ) {}

    async execute(CNPJ: string): Promise<void> {
        const debtor = await this.debtorsReposiroty.findByCNPJ(CNPJ);

        if(!debtor) {
            throw new Error("Debtor not exits");
        }

        await this.debtorsReposiroty.delete(debtor);

    }

}

export { DeleteDebtorUseCase };
