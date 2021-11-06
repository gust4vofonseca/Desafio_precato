import { inject, injectable } from "tsyringe";

import { Payment } from "../../entities/Payment";
import { IPaymentsRepository } from "../../repositories/IPaymentsRepositories";

@injectable()
class AllPaymentsUseCase {
    constructor(
        @inject("PaymentsRepository")
        private paymentsRepository: IPaymentsRepository
    ) {}

    async execute(): Promise<Payment[]>  {
        const payments = await this.paymentsRepository.list();

        return payments;
    }
}

export { AllPaymentsUseCase };