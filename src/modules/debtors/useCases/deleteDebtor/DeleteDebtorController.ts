import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteDebtorUseCase } from "./DeleteDebtorUseCase";

class DeleteDebtorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, CNPJ } = request.body;

        const deleteDebtorUseCase = container.resolve(DeleteDebtorUseCase);

        await deleteDebtorUseCase.execute(CNPJ);

        return response.status(201).send();
    }
}

export { DeleteDebtorController };
