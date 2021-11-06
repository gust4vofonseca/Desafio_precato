import { getRepository, Repository } from "typeorm";

import { ICreateDebtorDTO } from "../../dtos/ICreateDebtorDTO";
import { Debtor } from "../../entities/Debtor";
import { IDebtorsRepository } from "../IDebtorsRepository";


class DebtorsRepository implements IDebtorsRepository {
    private repository: Repository<Debtor>

    constructor(){
        this.repository = getRepository(Debtor)
    }

    async create({name, CNPJ}: ICreateDebtorDTO): Promise<void> {
        const debtor = this.repository.create({
            name,
            CNPJ
        });

        await this.repository.save(debtor)
    }

    async findByCNPJ(CNPJ: string): Promise<Debtor> {
        const debtor = await this.repository.findOne({CNPJ});

        return debtor;
    }

    async list(): Promise<Debtor[]> {
        const debtors = await this.repository.find()
        return debtors;
    }

    async delete(debtor: Debtor): Promise<void> {
        await this.repository.delete(debtor);
    }

    async update(debtor: Debtor): Promise<void> {
        await this.repository.update({id: debtor.id},debtor);
    }

}

export { DebtorsRepository };