import { inject, injectable } from "tsyringe";

import { ICreditorsRepository } from "../../repositories/ICreditorsRepository";

@injectable()
class DeleteCreditorUseCase {
    constructor(
        @inject("CreditorsRepository")
        private creditorsRepository: ICreditorsRepository
    ) {}

    async execute(CPF:string): Promise<void>  {
        const creditor = await this.creditorsRepository.findByCPF(CPF);

        if(!creditor) {
            throw new Error("Creditor not exists!");
        }

        await this.creditorsRepository.delete(creditor);
    }
}

export { DeleteCreditorUseCase };