import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateDebtorUseCase } from "./UpdateDebtorUseCase";

class UpdateDebtorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, CNPJ } = request.body;

        const updateDebtorUseCase = container.resolve(UpdateDebtorUseCase);

        await updateDebtorUseCase.execute({
            name,
            CNPJ
        })

        return response.status(201).send();
    }
}

export { UpdateDebtorController };
