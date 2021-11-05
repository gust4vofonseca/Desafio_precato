import { inject, injectable } from "tsyringe";

import { ICreditorsRepository } from "../../../creditors/repositories/ICreditorsRepository";
import { IDebtorsRepository } from "../../../debtors/repositories/IDebtorsRepository";
import { ICreatePaymentsDTO } from "../../dtos/ICreatePaymentsDTO";
import { IRequestPaymentsDTO } from "../../dtos/IRequestPaymentDTO";
import { IPaymentsRepository } from "../../repositories/IPaymentsRepositories";

@injectable()
class CreatePaymentUseCase {
    constructor(
        @inject("PaymentsRepository")
        private paymentsRepository: IPaymentsRepository,

        @inject("CreditorsRepository")
        private creditorsRepository: ICreditorsRepository,

        @inject("DebtorsRepository")
        private debtorsReposiroty: IDebtorsRepository
    ) {}

    async execute ({creditor_cpf, debtor_cnpj, value_initial, value_final, date }: IRequestPaymentsDTO ): Promise<void> {
        const creditor = await this.creditorsRepository.findByCPF(creditor_cpf);
        const debtor = await this.debtorsReposiroty.findByCNPJ(debtor_cnpj);

        let payment: ICreatePaymentsDTO;

        payment = {
            creditor_id: creditor.id,
            debtor_id: debtor.id,
            value_initial,
            value_final,
            date,
            status: "approved"
        }

        //regra 01
        if(creditor.status !== 'approved') {
            console.log(creditor)
            payment.status = 'Invalid'
            payment.reason = 'unapproved creditor'
        }

        //regra 02
        if (!debtor){
            payment.status = 'Invalid'
            payment.reason = 'Debtor does not exists'
        }

        //regra 03
        if(value_final <= 0 && value_initial <= 0){
            payment.status = 'Invalid'
            payment.reason = 'Values less than or equal to zero'
        }

        //regra 04
        if(value_final > value_initial){
            payment.status = 'Invalid'
            payment.reason = 'Final value greater than initial'
        }

        await this.paymentsRepository.create(payment);

    }

}

export { CreatePaymentUseCase };
