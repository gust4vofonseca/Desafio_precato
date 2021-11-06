import { getRepository, Repository } from "typeorm";

import { Payment } from "../../entities/Payment";
import { ICreatePaymentsDTO } from "../../dtos/ICreatePaymentsDTO";
import { IPaymentsRepository } from "../IPaymentsRepositories";
import { paymentsRoutes } from "../../../../routes/payments.routes";


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

    async findById(id: string): Promise<Payment> {
        const payment = await this.repository.findOne(id);

        return payment;
    }

    async list(): Promise<Payment[]> {
        const payments = await this.repository.find();

        return payments;
    }

    async delete(payment: Payment): Promise<void> {
        await this.repository.delete(payment.id);
    }
}

export { PaymentsRepository }