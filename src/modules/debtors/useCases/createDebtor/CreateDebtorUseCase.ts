import { inject, injectable } from "tsyringe";

import { ICreateDebtorDTO } from "../../dtos/ICreateDebtorDTO";
import { IDebtorsRepository } from "../../repositories/IDebtorsRepository";

@injectable()
class CreateDebtorUseCase {
    constructor(
        @inject("DebtorsRepository")
        private debtorsReposiroty: IDebtorsRepository
    ) {}

    async execute({name, CNPJ}: ICreateDebtorDTO): Promise<void> {
        const debtorAlreadyExists = await this.debtorsReposiroty.findByCNPJ(CNPJ);

        if(debtorAlreadyExists){
            throw new Error("Debtor already exists!");
        }

        await this.debtorsReposiroty.create({
            name,
            CNPJ
        })

    }

}

export { CreateDebtorUseCase };
