import { inject, injectable } from "tsyringe";

import { ICreateDebtorDTO } from "../../dtos/ICreateDebtorDTO";
import { IDebtorsRepository } from "../../repositories/IDebtorsRepository";

@injectable()
class UpdateDebtorUseCase {
    constructor(
        @inject("DebtorsRepository")
        private debtorsReposiroty: IDebtorsRepository
    ) {}

    async execute({name, CNPJ}: ICreateDebtorDTO): Promise<void> {
        const debtor= await this.debtorsReposiroty.findByCNPJ(CNPJ);

        debtor.name = name;

        await this.debtorsReposiroty.update(debtor);

    }

}

export { UpdateDebtorUseCase };
