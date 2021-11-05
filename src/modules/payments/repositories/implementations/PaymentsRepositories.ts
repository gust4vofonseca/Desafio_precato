import { getRepository, Repository } from "typeorm";

import { Payment } from "../../entities/Payment";
import { ICreatePaymentsDTO } from "../../dtos/ICreatePaymentsDTO";
import { IPaymentsRepository } from "../IPaymentsRepositories";


class PaymentsRepository implements IPaymentsRepository {
    private repository: Repository<Payment>;

    constructor(){
        this.repository = getRepository(Payment);
    }

    async create({
        creditor_id,
        debtor_id,
        value_initial,
        value_final,
        date,
        status,
        reason
    }: ICreatePaymentsDTO): Promise<void> {
        const payment = this.repository.create({
            creditor_id,
            debtor_id,
            value_initial,
            value_final,
            date,
            status,
            reason
        })

        await this.repository.save(payment)
    }

}

export { PaymentsRepository }