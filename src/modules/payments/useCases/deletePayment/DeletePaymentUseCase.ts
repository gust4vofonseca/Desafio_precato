import { inject, injectable } from "tsyringe";

import { IPaymentsRepository } from "../../repositories/IPaymentsRepositories";

@injectable()
class DeletePaymentUseCase {
    constructor(
        @inject("PaymentsRepository")
        private paymentsRepository: IPaymentsRepository
    ) {}

    async execute(id: string): Promise<void>  {
        const payment = await this.paymentsRepository.findById(id)
        
        if(!payment) {
            throw new Error("payment not exists");
        }

        console.log(payment)

        await this.paymentsRepository.delete(payment);
    }
}

export { DeletePaymentUseCase };