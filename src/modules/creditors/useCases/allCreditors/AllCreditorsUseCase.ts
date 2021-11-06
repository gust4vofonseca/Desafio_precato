import { inject, injectable } from "tsyringe";

import { Creditor } from "../../entities/Creditor";
import { ICreateCreditorDTO } from "../../dtos/ICreateCreditorDTO";
import { ICreditorsRepository } from "../../repositories/ICreditorsRepository";

@injectable()
class AllCreditorsUseCase {
    constructor(
        @inject("CreditorsRepository")
        private creditorsRepository: ICreditorsRepository
    ) {}

    async execute(): Promise<Creditor[]>  {
        const creditors = await this.creditorsRepository.list();

        return creditors;
    }
}

export { AllCreditorsUseCase };