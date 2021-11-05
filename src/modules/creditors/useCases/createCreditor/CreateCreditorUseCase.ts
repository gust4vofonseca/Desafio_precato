import { inject, injectable } from "tsyringe";

import { ICreateCreditorDTO } from "../../dtos/ICreateCreditorDTO";
import { ICreditorsRepository } from "../../repositories/ICreditorsRepository";

@injectable()
class CreateCreditorUseCase {
    constructor(
        @inject("CreditorsRepository")
        private creditorsRepository: ICreditorsRepository
    ) {}

    async execute({name, CPF, status }:ICreateCreditorDTO): Promise<void>  {
        const creditorAlreadyExists = await this.creditorsRepository.findByCPF(CPF);

        if(creditorAlreadyExists) {
            throw new Error("Creditor already exists!");
        }

        await this.creditorsRepository.create({
            name,
            CPF,
            status
        });
    }
}

export { CreateCreditorUseCase };