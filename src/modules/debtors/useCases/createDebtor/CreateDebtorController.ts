import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDebtorUseCase } from "./CreateDebtorUseCase";

class CreateDebtorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, CNPJ } = request.body;

        const createDebtorUseCase = container.resolve(CreateDebtorUseCase);

        await createDebtorUseCase.execute({
            name,
            CNPJ
        })

        return response.status(201).send();
    }
}

export { CreateDebtorController };
