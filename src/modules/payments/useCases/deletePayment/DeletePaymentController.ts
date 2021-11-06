import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePaymentUseCase } from "./DeletePaymentUseCase";

class DeletePaymentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const deletePaymentUseCase = container.resolve(DeletePaymentUseCase);

        await deletePaymentUseCase.execute(id);

        return response.status(201).send();
    }
}

export { DeletePaymentController };