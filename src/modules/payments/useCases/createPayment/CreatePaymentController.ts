import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePaymentUseCase } from "./CreatePaymentUseCase";

class CreatePaymentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { creditor_cpf, debtor_cnpj, value_initial, value_final, date  } = request.body;

        const createPaymentUseCase = container.resolve(CreatePaymentUseCase);

        await createPaymentUseCase.execute({
            creditor_cpf, 
            debtor_cnpj, 
            value_initial, 
            value_final, 
            date 
        });

        return response.status(201).send();
    }
}

export { CreatePaymentController };

