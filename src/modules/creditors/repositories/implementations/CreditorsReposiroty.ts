import { getRepository, Repository } from "typeorm";

import { ICreateCreditorDTO } from "../../dtos/ICreateCreditorDTO";
import { Creditor } from "../../entities/Creditor";
import { ICreditorsRepository } from "../ICreditorsRepository";

class CreditorsRepository implements ICreditorsRepository {
    private repository: Repository<Creditor>;

    constructor(){
        this.repository = getRepository(Creditor);
    }

    
    async create({name, CPF, status}: ICreateCreditorDTO): Promise<void> {
        const creditor = this.repository.create({
            name,
            CPF,
            status
        })

        await this.repository.save(creditor)
    }

    async findByCPF(CPF: string): Promise<Creditor> {
        const creditor = await this.repository.findOne({CPF})
        return creditor;
    }

    async list(): Promise<Creditor[]> {
        const creditors = await this.repository.find();
        return creditors;
    }

}

export { CreditorsRepository };
