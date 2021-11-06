import { inject, injectable } from "tsyringe";

import { ICreateCreditorDTO } from "../../dtos/ICreateCreditorDTO";
import { ICreditorsRepository } from "../../repositories/ICreditorsRepository";

@injectable()
class UpdateCreditorUseCase {
    constructor(
        @inject("CreditorsRepository")
        private creditorsRepository: ICreditorsRepository
    ) {}

    async execute({name, CPF, status }:ICreateCreditorDTO): Promise<void>  {
        const creditor = await this.creditorsRepository.findByCPF(CPF);

        creditor.name = name;
        creditor.status = status;

        await this.creditorsRepository.update( creditor );
    }
}

export { UpdateCreditorUseCase };